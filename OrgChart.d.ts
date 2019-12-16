
declare namespace OrgChart {
    enum orientation {
        top,
        left,
        right
    }
    enum action {
        zoom,
        xScroll,
        yScroll,
        none
    }
}

interface  options{
    lazyLoading: boolean,
    enableSearch: boolean,
    orientation: OrgChart.orientation,
    mouseScrool: OrgChart.action,
    nodeBinding: Object
}

declare class OrgChart {
    constructor(element: HTMLElement, options: options);

    /**
     * Loads org chart
     * @param nodes 
     */
   load(nodes: Array<Object>) : void;
     // load(nodes: Array<JSON>): void;
    fit(): void;
}