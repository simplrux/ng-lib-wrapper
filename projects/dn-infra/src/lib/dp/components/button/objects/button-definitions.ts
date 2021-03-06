export interface IButtonDefinitions {
    label?: string;
    icon?: string;
    disabled?: boolean;
    styleClass?: string;
    onClick?: string;
    onFocus?: string;
  }

export class ButtonDefinitions implements IButtonDefinitions {
    label: string;
    icon: string;
    disabled: boolean;
    styleClass: string;
    onClick: string;
    onFocus: string;
    constructor(params: IButtonDefinitions) {
        this.label = params.label;
        this.icon = (params.icon == null ? '' : params.icon);
        this.disabled = (params.disabled == null ? false : params.disabled);
        this.styleClass = (params.styleClass == null ? '' : params.styleClass);
        this.onClick = (params.onClick == null ? '' : params.onClick);
        this.onFocus = (params.onFocus == null ? '' : params.onFocus);
    }
}
