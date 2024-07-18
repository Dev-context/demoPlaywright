import { Page } from "@playwright/test";
import { INTERACTIONS,  MORE,  SWITCHTO,  VIDEO, WIDGETS, WYSIWYG} from "./subOptions";
import elements from "./elemets.json";
import Baseclass from "../../../suport/baseclass";


export default class Navbar extends Baseclass {
    private readonly home = this.page.locator(elements.navbar_li_home);
    private readonly register = this.page.locator(elements.navbar_li_register);
    private readonly webtable = this.page.locator(elements.navbar_li_webtable);
    private readonly switchTo = this.page.locator(elements.navbar_li_opc_switchto);
    private readonly widgets=this.page.locator(elements.navbar_li_opc_widgets)
    private readonly interactions=this.page.locator(elements.navbar_li_opc_interactions)
    private readonly video=this.page.locator(elements.navbar_li_opc_video)
    private readonly wsiwyg=this.page.locator(elements.navbar_li_opc_wysiwyg)
    private readonly more=this.page.locator(elements.navbar_li_opc_more)
    private readonly practiseSite=this.page.locator(elements.navbar_li_opc_practiseSite)

    constructor(page: Page) {
        super(page);
    }

    async openHome() {
        await this.home.click();
    }

    async openRegister() {
        await this.register.click();
    }

    async openWebTable() {
        await this.webtable.click();
    }

    async openOptionsSwitchTo(option: SWITCHTO) {
        await this.switchTo.hover();
       
        switch(option){
            case SWITCHTO.Alerts:await this.switchTo.getByText("Alerts").click()
            break;
            case SWITCHTO.Windows:await this.switchTo.getByText("Windows").click()
            break;
            case SWITCHTO.Frames:await this.switchTo.getByText("Frames").click()
            break;
          }
    }

    async openOptionsWidgets(option:WIDGETS){
        await this.widgets.hover()

        switch (option) {
            case WIDGETS.Accordion:await this.widgets.getByText("Accordion").click()
            break;
            case WIDGETS.AutoComplete:await this.widgets.getByText("AutoComplete").click()
            break;
            case WIDGETS.Datepicker:await this.widgets.getByText("Datepicker").click()
            break;
            case WIDGETS.Slider:await this.widgets.getByText("Slider").click()
            break;
        
        }
    }

    async openOptionsInteractions(option:INTERACTIONS){
        await this.interactions.hover()

        switch (option) {
            case INTERACTIONS.DragandDrop:await this.interactions.getByText("Drag and Drop").click()
            break;
            case INTERACTIONS.Selectable:await this.interactions.getByText("Selectable").click()
            break;
            case INTERACTIONS.Resizable:await this.interactions.getByText("Resizable").click()
            break;
        }
    }


    async openOptionsVideo(option:VIDEO){
        await this.video.hover()

        switch (option) {
            case VIDEO.Youtube:await this.video.getByText("Youtube").click()
            break;
            case VIDEO.Vimeo:await this.video.getByText("Vimeo").click()
            break;
        }
    }

    async openOptionsWsiwyg(option:WYSIWYG){
        await this.wsiwyg.hover()
     
        switch (option) {
            case WYSIWYG.TinyMCE:await this.video.getByText("TinyMCE").click()
            break;
            case WYSIWYG.CKEditor:await this.video.getByText("CKEditor").click()
            break;
            case WYSIWYG.SummerNote:await this.video.getByText("SummerNote").click()
            break;
            case WYSIWYG.CodeMirror:await this.video.getByText("CodeMirror").click()
            break;
        }
    }

    async openOptionsMore(option:MORE){
        await this.more.hover()

        switch (option) {
            case MORE.Charts:await this.video.getByText("Charts").click()
            break;
            case MORE.DynamicData:await this.video.getByText("Dynamic Data").click()
            break;
            case MORE.FileDownload:await this.video.getByText("File Download").click()
            break;
            case MORE.FileUpload:await this.video.getByText("File Upload").click()
            break;
            case MORE.JQueryProgressBar:await this.video.getByText("JQuery ProgressBar").click()
            break;
            case MORE.Loader:await this.video.getByText("Loader").click()
            break;
            case MORE.Modals:await this.video.getByText("Modals").click()
            break;
            case MORE.ProgressBar:await this.video.getByText("ProgressBar").click()
            break;
          
        }
    }


    async openPractiseSite() {
        await this.practiseSite.click();
    }

}
