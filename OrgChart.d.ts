
declare namespace OrgChart {
    enum orientation {
        top,
        left,
        right
    }
    enum action {
        /**
         * mouseScrool value
         */
        zoom,
        /**
         * mouseScrool value
         */
        xScroll,
        /**
         * mouseScrool value
         */
        yScroll,
        /**
         * nodeMouseClick value
         */
        edit, 
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        details,
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        expandCollapse, 
        /**
         * nodeMouseClick, nodeMouseDbClick and mouseScrool value
         */
        none,
    }
    enum scroll {
        visible,
    }

    const none: any;
    const normal: any;
}
    
interface  options{
    lazyLoading?: boolean,
    enableSearch?: boolean,
    orientation?: OrgChart.orientation,
    mouseScrool?: OrgChart.action,
    nodeBinding?: Object,
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    nodeMenu?: Object,
    nodeContextMenu?: Object,
    dragDropMenu?: Object,
    menu?: Object,
    toolbar?: boolean,
    sticky?: boolean,
    nodeMouseClick?: OrgChart.action,
    nodeMouseDdClick?: OrgChart.action,
    showXScroll?: OrgChart.scroll,
    showYScroll?: OrgChart.scroll,
    template?: string,
    tags?: Object,
    linkBinding?: Object,
    searchFields?: Array<string>,
    nodes?: Array<Object>,
    clinks?: Array<Object>,
    slinks?: Array<Object>,
    levelSeparation?: number,
    siblingSeparation?: number,
    subtreeSeparation?: number,
    mixedHierarchyNodesSeparation?: number,
    padding?: number,
    layout?: OrgChart,
    





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