<script setup lang="ts">
type ContactType =
  | '浮気・不倫調査'
  | '婚前・身元確認'
  | '素行・行動調査'
  | '人探し・行方調査'
  | 'ストーカー・嫌がらせ対策'
  | '盗聴器・盗撮器探索'
  | 'その他のご相談'

type PreferredContact = '電話' | 'メール' | '電話・メールどちらでも可'

interface FormState {
  contactType: ContactType | ''
  name: string
  preferredContact: PreferredContact | ''
  phone: string
  email: string
  relation: string
  contactTime: string
  area: string
  urgency: string
  message: string
  consideration: string
  privacyConsent: boolean
}

type FormErrors = Record<
  'contactType' | 'name' | 'preferredContact' | 'phone' | 'email' | 'contactMethod' | 'message' | 'privacyConsent',
  string
>

const contactTypes: ContactType[] = [
  '浮気・不倫調査',
  '婚前・身元確認',
  '素行・行動調査',
  '人探し・行方調査',
  'ストーカー・嫌がらせ対策',
  '盗聴器・盗撮器探索',
  'その他のご相談',
]

const preferredContacts: PreferredContact[] = [
  '電話',
  'メール',
  '電話・メールどちらでも可',
]

const relations = [
  '配偶者',
  '婚約者・交際相手',
  '元配偶者・元交際相手',
  '家族',
  '知人',
  '勤務先関係',
  'その他',
]

const contactTimes = [
  '午前中',
  '12:00-15:00',
  '15:00-18:00',
  '18:00-21:00',
  'いつでも可',
]

const urgencies = [
  'できるだけ早く相談したい',
  '1週間以内に相談したい',
  '1か月以内を目安に相談したい',
  'まずは情報収集したい',
]

const runtimeConfig = useRuntimeConfig()
const googleFormConfig = {
  actionUrl: runtimeConfig.public.googleForm.actionUrl,
  fields: {
    contactType: runtimeConfig.public.googleForm.contactType,
    name: runtimeConfig.public.googleForm.name,
    preferredContact: runtimeConfig.public.googleForm.preferredContact,
    phone: runtimeConfig.public.googleForm.phone,
    email: runtimeConfig.public.googleForm.email,
    relation: runtimeConfig.public.googleForm.relation,
    contactTime: runtimeConfig.public.googleForm.contactTime,
    area: runtimeConfig.public.googleForm.area,
    urgency: runtimeConfig.public.googleForm.urgency,
    message: runtimeConfig.public.googleForm.message,
    consideration: runtimeConfig.public.googleForm.consideration,
    privacyConsent: runtimeConfig.public.googleForm.privacyConsent,
  },
}

const createInitialForm = (): FormState => ({
  contactType: '',
  name: '',
  preferredContact: '',
  phone: '',
  email: '',
  relation: '',
  contactTime: '',
  area: '',
  urgency: '',
  message: '',
  consideration: '',
  privacyConsent: false,
})

const form = reactive<FormState>(createInitialForm())
const errors = reactive<FormErrors>({
  contactType: '',
  name: '',
  preferredContact: '',
  phone: '',
  email: '',
  contactMethod: '',
  message: '',
  privacyConsent: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const submitAttemptId = ref<string | null>(null)
const submitButton = ref<HTMLButtonElement | null>(null)
const successCloseButton = ref<HTMLButtonElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null
let bodyOverflowBeforeModal = ''

const isGoogleFormConfigured = computed(() => Boolean(
  googleFormConfig.actionUrl &&
  Object.values(googleFormConfig.fields).every(Boolean),
))
const requiresPhone = computed(() => form.preferredContact === '電話')
const requiresEmail = computed(() => form.preferredContact === 'メール')
const requiresEither = computed(() => form.preferredContact === '電話・メールどちらでも可')

const contactGuidance = computed(() => {
  switch (form.contactType) {
    case '浮気・不倫調査':
      return 'いつ頃から不審な行動があるか、分かる範囲でご記入ください。'
    case '人探し・行方調査':
      return '対象者との関係や最後に確認できた時期があればご記入ください。'
    case 'ストーカー・嫌がらせ対策':
      return '現在の被害状況や、警察相談の有無があればご記入ください。'
    default:
      return '分かる範囲で構いません。状況やご希望をご記入ください。'
  }
})

const logContactFormEvent = (
  event: string,
  details: Record<string, unknown> = {},
  level: 'info' | 'warn' | 'error' = 'info',
) => {
  console[level](`[contact-form] ${JSON.stringify({
    event,
    attemptId: submitAttemptId.value,
    timestamp: new Date().toISOString(),
    ...details,
  })}`)
}

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key as keyof FormErrors] = ''
  })
}

const validate = () => {
  clearErrors()
  if (!form.contactType) errors.contactType = '相談種別を選択してください。'
  if (!form.name.trim()) errors.name = 'お名前を入力してください。'
  if (!form.preferredContact) errors.preferredContact = 'ご希望の連絡方法を選択してください。'

  if (requiresPhone.value && !form.phone.trim()) {
    errors.phone = '電話番号を入力してください。'
  } else if (form.phone.trim() && !/^[0-9-]{10,13}$/.test(form.phone.trim())) {
    errors.phone = '電話番号は半角数字で入力してください。'
  }

  if (requiresEmail.value && !form.email.trim()) {
    errors.email = 'メールアドレスを入力してください。'
  } else if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = '正しいメールアドレスを入力してください。'
  }

  if (requiresEither.value && !form.phone.trim() && !form.email.trim()) {
    errors.contactMethod = '電話番号またはメールアドレスのどちらかを入力してください。'
  }
  if (!form.message.trim()) errors.message = 'ご相談内容を入力してください。'
  if (!form.privacyConsent) errors.privacyConsent = '個人情報の取り扱いへの同意が必要です。'

  return Object.values(errors).every((message) => !message)
}

const resetForm = () => {
  Object.assign(form, createInitialForm())
  clearErrors()
}

const onSubmit = async (event: SubmitEvent) => {
  submitSuccess.value = false
  submitError.value = ''
  submitAttemptId.value = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

  logContactFormEvent('submit_attempted', {
    preferredContactSelected: Boolean(form.preferredContact),
    phoneProvided: Boolean(form.phone.trim()),
    emailProvided: Boolean(form.email.trim()),
  })

  if (!validate()) {
    logContactFormEvent('validation_failed', {
      invalidFields: Object.entries(errors)
        .filter(([, message]) => Boolean(message))
        .map(([field]) => field),
    }, 'warn')
    return
  }

  if (!isGoogleFormConfigured.value) {
    submitError.value = 'フォームの送信先が設定されていません。'
    logContactFormEvent('configuration_error', {}, 'error')
    return
  }

  isSubmitting.value = true
  const startedAt = Date.now()
  logContactFormEvent('submission_started')

  try {
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const body = new URLSearchParams()
    formData.forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value)
    })

    const response = await fetch(googleFormConfig.actionUrl, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      body,
    })

    logContactFormEvent('submission_request_completed', {
      elapsedMs: Date.now() - startedAt,
      responseType: response.type,
    })
    submitSuccess.value = true
    resetForm()
  } catch (error) {
    submitError.value = '送信できませんでした。通信状況をご確認のうえ、もう一度お試しください。'
    logContactFormEvent('submission_failed', {
      elapsedMs: Date.now() - startedAt,
      errorName: error instanceof Error ? error.name : 'Error',
    }, 'error')
  } finally {
    isSubmitting.value = false
  }
}

const closeSuccessModal = () => {
  if (!submitSuccess.value) return
  submitSuccess.value = false
  logContactFormEvent('success_modal_closed')
}

watch(submitSuccess, async (isOpen) => {
  if (!import.meta.client) return
  if (isOpen) {
    previouslyFocusedElement = document.activeElement as HTMLElement | null
    bodyOverflowBeforeModal = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    successCloseButton.value?.focus()
    return
  }

  document.body.style.overflow = bodyOverflowBeforeModal
  previouslyFocusedElement?.isConnected
    ? previouslyFocusedElement.focus()
    : submitButton.value?.focus()
  previouslyFocusedElement = null
})

onMounted(() => {
  logContactFormEvent('initialized', { configured: isGoogleFormConfigured.value })
})

onUnmounted(() => {
  if (import.meta.client && submitSuccess.value) {
    document.body.style.overflow = bodyOverflowBeforeModal
  }
})
</script>

<template>
  <div class="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200 lg:p-8">
    <div class="flex flex-col gap-2 border-b border-slate-200 pb-5">
      <h2 class="text-2xl font-bold text-slate-900 lg:text-3xl">
        無料相談
      </h2>
      <p class="text-sm leading-7 text-slate-600 lg:text-base">
        浮気・不倫調査をはじめ、各種調査のご相談を受け付けています。秘密厳守で対応します。
      </p>
      <div class="rounded-2xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
        送信内容を確認後、担当より折り返しご連絡します。お急ぎの場合はお電話またはLINEでのご相談も可能です。
      </div>
      <div
        v-if="submitError"
        class="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
      >
        {{ submitError }}
      </div>
    </div>

    <form
      class="mt-6 grid gap-5"
      @submit.prevent="onSubmit"
    >
      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-800">相談種別<span class="ml-1 text-red-500">*</span></label>
        <select
          v-model="form.contactType"
          :name="googleFormConfig.fields.contactType"
          class="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
          <option value="">
            選択してください
          </option>
          <option
            v-for="option in contactTypes"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <p
          v-if="errors.contactType"
          class="text-sm text-red-600"
        >
          {{ errors.contactType }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-800">お名前（仮名可）<span class="ml-1 text-red-500">*</span></label>
        <input
          v-model="form.name"
          :name="googleFormConfig.fields.name"
          type="text"
          placeholder="例：山田 花子"
          class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
        <p
          v-if="errors.name"
          class="text-sm text-red-600"
        >
          {{ errors.name }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-800">ご希望の連絡方法<span class="ml-1 text-red-500">*</span></label>
        <div class="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-3">
          <label
            v-for="option in preferredContacts"
            :key="option"
            class="flex cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm"
          >
            <input
              v-model="form.preferredContact"
              :name="googleFormConfig.fields.preferredContact"
              :value="option"
              type="radio"
              class="h-4 w-4 accent-[hsl(var(--accent))]"
            >
            <span>{{ option }}</span>
          </label>
        </div>
        <p
          v-if="errors.preferredContact"
          class="text-sm text-red-600"
        >
          {{ errors.preferredContact }}
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">電話番号<span
            v-if="requiresPhone"
            class="ml-1 text-red-500"
          >*</span></label>
          <input
            v-model="form.phone"
            :name="googleFormConfig.fields.phone"
            type="tel"
            placeholder="09012345678"
            class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
          <p
            v-if="errors.phone"
            class="text-sm text-red-600"
          >
            {{ errors.phone }}
          </p>
        </div>
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">メールアドレス<span
            v-if="requiresEmail"
            class="ml-1 text-red-500"
          >*</span></label>
          <input
            v-model="form.email"
            :name="googleFormConfig.fields.email"
            type="email"
            placeholder="example@mail.com"
            class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
          <p
            v-if="errors.email"
            class="text-sm text-red-600"
          >
            {{ errors.email }}
          </p>
        </div>
      </div>
      <p
        v-if="errors.contactMethod"
        class="text-sm text-red-600"
      >
        {{ errors.contactMethod }}
      </p>

      <div class="grid gap-5 md:grid-cols-2">
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">対象者との関係</label>
          <select
            v-model="form.relation"
            :name="googleFormConfig.fields.relation"
            class="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
            <option value="">
              任意
            </option>
            <option
              v-for="option in relations"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">希望連絡時間帯</label>
          <select
            v-model="form.contactTime"
            :name="googleFormConfig.fields.contactTime"
            class="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
            <option value="">
              任意
            </option>
            <option
              v-for="option in contactTimes"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">調査希望エリア</label>
          <input
            v-model="form.area"
            :name="googleFormConfig.fields.area"
            type="text"
            placeholder="例：上越市、柏崎市、長岡市 など"
            class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
        </div>
        <div class="grid gap-2">
          <label class="text-sm font-bold text-slate-800">緊急度</label>
          <select
            v-model="form.urgency"
            :name="googleFormConfig.fields.urgency"
            class="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
            <option value="">
              任意
            </option>
            <option
              v-for="option in urgencies"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-800">ご相談内容<span class="ml-1 text-red-500">*</span></label>
        <p class="text-sm leading-6 text-slate-500">
          {{ contactGuidance }}
        </p>
        <textarea
          v-model="form.message"
          :name="googleFormConfig.fields.message"
          rows="8"
          placeholder="いつ頃から、どなたについて、どのようなことでお困りかをご記入ください。分かる範囲で構いません。"
          class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
        <p
          v-if="errors.message"
          class="text-sm text-red-600"
        >
          {{ errors.message }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-800">折り返し時の配慮事項</label>
        <textarea
          v-model="form.consideration"
          :name="googleFormConfig.fields.consideration"
          rows="4"
          placeholder="例：電話をかける際は事務所名を出さないでほしい、メール件名に配慮してほしい など"
          class="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div class="grid gap-2">
        <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <input
            v-model="form.privacyConsent"
            :name="googleFormConfig.fields.privacyConsent"
            type="checkbox"
            value="同意する"
            class="mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--accent))]"
          >
          <span><NuxtLink
            to="/privacy-policy"
            target="_blank"
            class="font-bold text-accent underline underline-offset-2"
          >プライバシーポリシー</NuxtLink>に同意のうえ送信します。</span>
        </label>
        <p
          v-if="errors.privacyConsent"
          class="text-sm text-red-600"
        >
          {{ errors.privacyConsent }}
        </p>
      </div>

      <button
        ref="submitButton"
        type="submit"
        :disabled="!isGoogleFormConfigured || isSubmitting"
        class="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
      >
        {{ !isGoogleFormConfigured ? 'フォーム準備中' : isSubmitting ? '送信中…' : '無料で相談する' }}
      </button>
      <p class="text-center text-sm text-slate-500">
        営業・売り込み目的のお問い合わせはご遠慮ください。
      </p>
    </form>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="submitSuccess"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          @click.self="closeSuccessModal"
          @keydown.esc.prevent="closeSuccessModal"
          @keydown.tab.prevent="successCloseButton?.focus()"
        >
          <div class="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-8">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg
                class="h-9 w-9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              ><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <h2
              id="contact-success-title"
              class="mt-5 text-2xl font-bold text-slate-900"
            >
              送信が完了しました
            </h2>
            <p class="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              お問い合わせを送信しました。内容を確認のうえ、担当よりご連絡します。
            </p>
            <button
              ref="successCloseButton"
              type="button"
              class="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-bold text-white"
              @click="closeSuccessModal"
            >
              閉じる
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
