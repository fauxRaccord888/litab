import type { ForwardedRef, MouseEvent } from "react";
import type { PentagramUpsertEditorProps } from "./PentagramUpsertEditor";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

import PentagramUpsertEditor from "./PentagramUpsertEditor";
import Button from "$lib/components/common/Button";

import "./style/pentagramUpsertView.scss"

type PentagramUpsertViewProps = PentagramUpsertEditorProps & {
    title: string,
    handleSubmit: () => void;
}

export default forwardRef(function PentagramUpsertView(props: PentagramUpsertViewProps, ref: ForwardedRef<HTMLDivElement>) {
    const { title, handleSubmit, ...editorProps } = props 
    const { t } = useTranslation()

    const onClickSubmit = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleSubmit) handleSubmit()
    }

    return (
        <div className="pentagram-upsert-view-component">
            <div className="pentagram-upsert-view-component__inner-container">
                <span className="pentagram-upsert-view-component__title">
                    {title}
                </span>
                <PentagramUpsertEditor 
                    ref={ref}
                    {...editorProps} 
                />
                <Button className="pentagram-upsert-view-component__submit-button" primary onClick={onClickSubmit}>
                    {t('button.submit')}
                </Button>
            </div>
        </div>
    )
})