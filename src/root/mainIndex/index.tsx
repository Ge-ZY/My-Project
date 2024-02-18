import FirstPage from "../../pages/FirstPage";
import SecondPage from "../../pages/secondPage";

export default class MainIndex {
    public static initModuleClass(name: string, parent: any) {
        switch (name) {
            case 'firstPage': return <FirstPage parent={parent}></FirstPage>;
            case 'secondPage': return <SecondPage />;
        }
    }
}
