import type { MetaDataFields } from "$feature/metaData/types";
import { useEffect, useState, type FormEventHandler } from "react";
import { useTranslation } from "react-i18next";
import Button from "$lib/components/common/Button";
import "./style/upsertForm.scss"

export default function UpsertForm(props: {
    handleMutation: (e: FormData) => void
    placeholders: MetaDataFields
    initialValues?: MetaDataFields<string | null | undefined>
}) {
    const { handleMutation, placeholders, initialValues } = props
    const { t } = useTranslation()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (initialValues?.title) setTitle(initialValues?.title)
        if (initialValues?.description) setDescription(initialValues?.description)
    }, [initialValues])

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        handleMutation(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="upsert-form-component" >
            <div className="upsert-form-component__field-input-container">
                <input 
                    className="upsert-form-component__field-input" 
                    name="title" 
                    placeholder={placeholders.title}
                    value={title ?? ""}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <textarea 
                    className="upsert-form-component__field-input upsert-form-component__field-input--large" 
                    name="description" 
                    placeholder={placeholders.description} 
                    value={description ?? ""}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                />
            </div>

            <Button className="upsert-form-component__upload-button">
                {t('button.submit')}
            </Button>
        </form>
    )
}