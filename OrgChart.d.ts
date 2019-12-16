
declare var OrgChart: () => void;


declare module "OrgChart" {

    export class OrgChart {
        /**
         * Action  of org chart
         */
        static action: any;
        load(nodes: any) {
            throw new Error("Method not implemented.");
        }
        constructor(doc: any, params: any);
        action: any;
    }
}



// declare global {
//     export interface OrgChart {
//         action: any;
//     }


//}

