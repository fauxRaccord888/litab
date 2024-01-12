const supabaseErrors = [
    {
        targetString: "duplicate key value violates unique constraint",
        // TODO 중복 발생 필드 ORM 없이 파싱?
        message: "중복된 사항이 감지되었어요"
    }
]

export const parseErrorMessage = (errorMessage: string) => {
    const target = supabaseErrors.find((e) => errorMessage?.includes(e.targetString))
    return target?.message || '알 수 없는 에러가 발생했어요'
}