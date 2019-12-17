
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

    enum match {
        height,
        width,
        boundary
    }

    enum anim {
        inPow,
        outPow,
        inOutPow,
        inSin,
        outSin,
        inOutSin,
        inExp,
        outExp,
        inOutExp,
        inCirc,
        outCirc,
        inOutCirc,
        rebound,
        inBack,
        outBack,
        inOutBack
    }

    const none: any;
    const normal: any;
    const CENTER: any;
    const ORIENTATION: any;

    
}
    
interface  options{
    /**
     * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need.
     * Default value: true

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        lazyLoading: true,

    });
     */
    lazyLoading?: boolean,
    /**
     * Enables advanced search.

        Default value: true

        Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        enableSearch: true,

    });
     */
    enableSearch?: boolean,
    orientation?: OrgChart.orientation,
    /**
     * mouseScrool can accept the following values:

    OrgChart.action.zoom - will zoom in/out on mouse scroll

    OrgChart.action.xScroll - left/right move of the chart on mouse scroll

    OrgChart.action.yScroll - up/down move of the chart on mouse scroll

    OrgChart.action.none - do nothing on mouse scroll

    Default value: OrgChart.action.zoom


    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       mouseScrool: OrgChart.action.zoom

    });
     */
    mouseScrool?: OrgChart.action,
    nodeBinding?: Object,
    /**
     * With the drag and drop features of OrgChart, you can move nodes easily.
     * Default value: true

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

            enableDragDrop: true,

    });
     */
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    /**
     * Enables edit, add, remove and other node operations. Also you can define your own node operation for more information see Node Menu Item

        Default value: null

        Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

	    nodeMenu:{

                details: {text:"Details"},
                edit: {text:"Edit"},
                add: {text:"Add"},
                remove: {text:"Remove"}
                
            },

    });
     */
    nodeMenu?: Object,
    nodeContextMenu?: Object,
    /**
     * Use dragDropMenu with drag & drop and grouping feature.

    Default value: null

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

	    dragDropMenu: {

            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }

        },

    });
     */
    dragDropMenu?: Object,
    /**
     * Enables export to excel, export to svg and other OrgChart operations. Also you can define your own OrgChart operation for more information see OrgChart.ImportFormCSV

    Default value: null

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       menu: {

            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
       },
    });
     */
    menu?: Object,
    toolbar?: boolean,
    sticky?: boolean,
    /**
     * nodeMouseClick can accept the following values:

    * OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
    * 
    * OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
    * 
    * OrgChart.action.expandCollapse - will expand or collapse the children nodes
    * 
    * OrgChart.action.none - do nothing on node click event
    * 
    * Default value: OrgChart.action.details

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       nodeMouseClick: OrgChart.action.edit

    });
    
     */
    nodeMouseClick?: OrgChart.action,
    nodeMouseDdClick?: OrgChart.action,
    /**
     * showXScroll can accept the following values:

    OrgChart.none

    OrgChart.scroll.visible - Will display horisontal scroll bar

    Default value: OrgChart.none


    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       showXScroll: OrgChart.scroll.visible

    });
     */
    showXScroll?: OrgChart.scroll,
    /**
     * 
     * showYScroll can accept the following values:

    OrgChart.none

    OrgChart.scroll.visible - Will display vertical scroll bar

    Default value: OrgChart.none

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       showYScroll: OrgChart.scroll.visible

    });
     */
    showYScroll?: OrgChart.scroll,
    /**
     * Set template if you want to change the appearance of the chart. OrgChart JS comes with number of build-in templates:

    ana

    ula
    
    olivia
    
    belinda
    rony
    mery
    polina
    mila
    diva
    luba
    derek
    base
    Also you can define your own template. For more information see Creating Custom Template

    Default value: ana

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

       template: "derek"

    });
     */
    template?: string,
    /**
     * With tags option you can:

    Set specific template for tagged nodes

    Set the default state (expand/collapse) for tagged nodes

    Define a group for tagged nodes

    Set node as assistant for tagged nodes

    Set node menu items for tagged nodes


    Set specific template for tagged nodes. See Multiple Templates in one chart for more details.

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        tags: {

            Management: {
                template: "rony"
            }
        },     

        nodes: [
            { id: 1, tags: ["Management"] },        
        ]

    });

    Set the default state (expand/collapse) for tagged nodes. See Expand/Collapse for more details.

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        tags: {

            hide: {
                state: OrgChart.COLLAPSE
            }
        },

        nodes: [
            { id: "1" },
            { id: "2", tags: ["hide"] },
            { id: "3" }
        ]
    });
    

    Define a group for tagged nodes. See Grouping for more details.

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        tags: {

            HRs: {
                group: true,
                groupName: "HR Team",
                groupState: OrgChart.EXPAND,
                template: "group_grey"
            }
        },

        nodes: [
            { id: 1, tags: ["HRs"] }
        ]
    });     
    

    Set node as assistant for tagged nodes. See Assistant for more details.

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        tags: {

            assistant: {
                template: "mery"
            }
        },

        nodes: [
            { id: 1, tags: ["assistant"] }
        ]

    });     
    

    Set node menu items for tagged nodes. See Node Menu Item for more details.

    Code example:

 
    var chart = new OrgChart(document.getElementById("tree"), {

        tags: 

            customMenuItems: {
                nodeMenu: {
                    add: { text: "Add New" }
                }
            }
          },
    });

     */
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
    scaleInitial?: OrgChart.match | number,
    scaleMin?: number,
    scaleMax?: number,
    orderBy?: string,
    editUI?: Object,
    searchUI?: Object,
    xScrollUI?: Object,
    yScrollUI?: Object,
    nodeMenuUI?: Object,
    nodeContextMenuUI?: Object,
    toolbarUI?: Object,
    notifierUI?: Object,
    dragDropMenuUI?: Object,
    menuUI?: Object,
    exportUrl?: string,
    collapse?: Object,
    expand?: Object,
    align?: OrgChart,
    UI?: OrgChart,
    anim?: Object,
    zoom?: Object,
    roots?: Array<number>,
    onUpdate?: string,
    onRemove?: string,
    onAdd?: string,
    onRedraw?: string,
    onImageUploaded?: string,
    onUpdateTags?: string,
    onClick?: string,
    onDbClick?: string,
    onExpCollClick?: string,
    onExportStart?: string,
    onExportEnd?: string,
    onSearchClick?: string,
    onReady?: string

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