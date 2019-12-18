
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
 ```
    var chart = new OrgChart(document.getElementById("tree"), {
        lazyLoading: true;
    });
    ```
     */
    lazyLoading?: boolean,
    /**
     * Enables advanced search.

        Default value: true

        Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: true,
    });
```
    */
    enableSearch?: boolean,
    /**
     * Specifies the orientation of the OrgChart JS. could accept one of the following values:

- OrgChart.orientation.top
- OrgChart.orientation.bottom
- OrgChart.orientation.right
- OrgChart.orientation.left
- OrgChart.orientation.top_left
- OrgChart.orientation.bottom_left
- OrgChart.orientation.right_top
- OrgChart.orientation.left_top
Default value: OrgChart.orientation.top

Code example:
``` 
        var chart = new OrgChart(document.getElementById("tree"), {
            ...
            orientation: OrgChart.orientation.bottom
        });  
   ``` 
     */
    orientation?: OrgChart.orientation,
    /**
     * mouseScrool can accept the following values:

    - OrgChart.action.zoom - will zoom in/out on mouse scroll

    - OrgChart.action.xScroll - left/right move of the chart on mouse scroll

    - OrgChart.action.yScroll - up/down move of the chart on mouse scroll

    - OrgChart.action.none - do nothing on mouse scroll

    Default value: OrgChart.action.zoom


    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       mouseScrool: OrgChart.action.zoom
    });
```
    */
    mouseScrool?: OrgChart.action,
    /**
     * Node binding in OrgChart JS maps node data to node template parameters.

Code example:
```
      var chart = new OrgChart(document.getElementById("orgchart"), {
            nodeBinding: {
                field_0: "name"
            },
            nodes: [
                { id: 1, name: "Amber McKenzie" },
                { id: 2, pid: 1, name: "Ava Field" },
                { id: 3, pid: 1, name: "Peter Stevens" }
            ]
        });
 ```   
In the example above the field name will be bount to field_0 from the template.

Also you can define your own field in the templae, for more information go to Fields page on our website.
     */
    nodeBinding?: Object,
    /**
     * With the drag and drop features of OrgChart, you can move nodes easily.
     * Default value: true

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
            enableDragDrop: true,
    });
```
    */
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    /**
     * Enables edit, add, remove and other node operations. Also you can define your own node operation for more information see Node Menu Item

        Default value: null

        Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
	    nodeMenu:{
                details: {text:"Details"},
                edit: {text:"Edit"},
                add: {text:"Add"},
                remove: {text:"Remove"}       
            },
    });
```
     */
    nodeMenu?: Object,
    nodeContextMenu?: Object,
    /**
     * Use dragDropMenu with drag & drop and grouping feature.

    Default value: null

    Code example:
```
    var chart = new OrgChart(document.getElementById("tree"), {
	    dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
    });
```
    */
    dragDropMenu?: Object,
    /**
     * Enables export to excel, export to svg and other OrgChart operations. Also you can define your own OrgChart operation for more information see OrgChart.ImportFormCSV

    Default value: null

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       menu: {
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
       },
    });
```
    */
    menu?: Object,
    /**
     * A toolbar is a set of icons or buttons.

Default value: null

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: false
            },
            ...
        }); 
```    
     */
    toolbar?: Object,
    sticky?: boolean,
    /**
     * nodeMouseClick can accept the following values:

    - OrgChart.action.edit - will open the edit view for the clicked node on the right hand side
    
    - OrgChart.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
     
    - OrgChart.action.expandCollapse - will expand or collapse the children nodes
     
    - OrgChart.action.none - do nothing on node click event
     
    Default value: OrgChart.action.details

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       nodeMouseClick: OrgChart.action.edit
    });
```    
     */
    nodeMouseClick?: OrgChart.action,
    nodeMouseDdClick?: OrgChart.action,
    /**
     * showXScroll can accept the following values:

    - OrgChart.none

    - OrgChart.scroll.visible - Will display horisontal scroll bar

    Default value: OrgChart.none

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       showXScroll: OrgChart.scroll.visible
    });
```
    */
    showXScroll?: OrgChart.scroll,
    /**
     * 
     * showYScroll can accept the following values:

    - OrgChart.none

    - OrgChart.scroll.visible - Will display vertical scroll bar

    Default value: OrgChart.none

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       showYScroll: OrgChart.scroll.visible
    });
```
    */
    showYScroll?: OrgChart.scroll,
    /**
    Set template if you want to change the appearance of the chart. OrgChart JS comes with number of build-in templates:

    - ana
    - ula  
    - olivia   
    - belinda
    - rony
    - mery
    - polina
    - mila
    - diva
    - luba
    - derek
    - base
    - deborah
    
    Also you can define your own template. For more information see Creating Custom Template

    Default value: ana

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
       template: "derek"
    });
```
    */
    template?: string,
    /**
     * With tags option you can:

    - Set specific template for tagged nodes

    - Set the default state (expand/collapse) for tagged nodes

   - Define a group for tagged nodes

    - Set node as assistant for tagged nodes

    - Set node menu items for tagged nodes


    Set specific template for tagged nodes. See Multiple Templates in one chart for more details.

    Code example:
``` 
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
```
    Set the default state (expand/collapse) for tagged nodes. See Expand/Collapse for more details.

    Code example:
``` 
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
```    

    Define a group for tagged nodes. See Grouping for more details.

    Code example:
```
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
```    
    Set node as assistant for tagged nodes. See Assistant for more details.

    Code example:
```
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
```    

    Set node menu items for tagged nodes. See Node Menu Item for more details.

    Code example:
``` 
    var chart = new OrgChart(document.getElementById("tree"), {
        tags: 
            customMenuItems: {
                nodeMenu: {
                    add: { text: "Add New" }
                }
            }
          },
    });
```
     */
    tags?: Object,
    /**
     * Link binding in OrgChart JS maps node data to link template parameters.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), {
            linkBinding: {
                link_field_0: "createdAt"
            },
            nodes: [
                { id: "1", name: "Amber McKenzie"  },
                { id: "2", pid: "1", createdAt: "Since 08/08/2018" },
                { id: "3", pid: "1", createdAt: "Since 05/04/2018" }
            ]
        }); 
```
        */
    linkBinding?: Object,
    /**
     * Search by the fields defined in searchFields.

Default value: Empty array

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            searchFields: ["name", "title", etc...],
            ...
        }); 
 ```
        */
    searchFields?: Array<string>,
    /**
     * Array of node data JSON objects. nodes option is the data source of the chart.

Code example:
``` 
        var chart = new OrgChart(document.getElementById("tree"), {
            ...
            nodes: [
                { id: "1" },
                { id: "2", pid: "1" },
                { id: "3", pid: "1", tags: ["Sales"] }
            ]
        }); 
    ```
Node JSON objects could have unlimited number of properties, id, pid and tags are reserved node properties.

- id - unique identifier, it clould be integer or string
- pid - is the parent id
- tags - array of strings

     */
    nodes?: Array<Object>,
    clinks?: Array<Object>,
    slinks?: Array<Object>,
    /**
     * The gap between each level.

Default value: 60

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            levelSeparation: 50
        });
 ```
        */
    levelSeparation?: number,
    /**
     * The gap between nodes in a subtree.

Default value: 20

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            siblingSeparation: 50
        });  
 ```   
     */
    siblingSeparation?: number,
    /**
     * The gap between subtrees.

Default value: 40

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            subtreeSeparation: 50
        }); 
 ```
        */
    subtreeSeparation?: number,
    /**
     * The gap between nodes in vertical layout.

Default value: 20

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            mixedHierarchyNodesSeparation: 5
        }); 
 ```
        */
    mixedHierarchyNodesSeparation?: number,
    /**
     * The padding option sets the padding area on all four sides of the OrgChart.

Default value: 30

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            padding: 20
        });  
 ```   
     */
    padding?: number,
    /**
     * The layout of the OrgChart

- OrgChart.normal
- OrgChart.mixed
- OrgChart.tree
- OrgChart.treeLeftOffset
- OrgChart.treeRightOffset
Default value: OrgChart.normal

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            layout: OrgChart.mixed
        });  
 ```   
     */
    layout?: OrgChart,
    /**
     * The scale factor determines what fraction of the entire scale is visible at one time.

- OrgChart.match.height
- OrgChart.match.width
- OrgChart.match.boundary
- [float]

Default value: 1

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleInitial: 0.5
        });  
 ```
        For more information go to Layout page on our website.
     */
    scaleInitial?: OrgChart.match | number,
    /**
     * Determines the minimum scale factor.

Default value: 0.1

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleMin: 0.2
        });  
 ```
        */
    scaleMin?: number,
    /**
     * Determines the naximum scale factor.

Default value: 5

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            scaleMax: 10
        });  
 ```
        */
    scaleMax?: number,
    /**
     * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array.

Default value: null

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            ...
            orderBy: "orderId",
            nodes: [
                ...
                { id: 10, pid: 1, orderId: 2 },
                { id: 11, pid: 1, orderId: 1 }
                ...
            ]
        }); 
```
In the example above node with id 11 will be before node with id 10. orderBy can be set to any property from the node JSON object, string or integer.


     */
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
    /**
     * The URL to the export server.

Default value: https://balkangraph.com/export

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            exportUrl: "https://balkangraph.com/export",
            ...
        }); 
 ```
        */
    exportUrl?: string,
    /**
     * Collapse specified level of the chart and its children if allChildren is true.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            ...
        });
   ``` 
     */
    collapse?: Object,
    /**
     * Expand specified node ids and its children if allChildren is true.

The expand option works only if collapse is set.

In the example above the second level of the chart will be collapsed but node with id 155 and its children will be expanded.

Code example:
```
        var chart = new OrgChart(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            expand:{
                nodes: [155],
                allChildren: true
            }
            ...
        });
   ``` 
     */
    expand?: Object,
    /**
     *  The align option specifies the alignment of the nodes inside OrgChart JS.

Default value: OrgChart.CENTER

- OrgChart.CENTER - centered
- OrgChart.ORIENTATION - according to the orientation option

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            align: OrgChart.ORIENTATION,
            ...
        }); 
 ```   
     */
    align?: OrgChart,
    UI?: OrgChart,
    /**
     *Can be used to control the transition of the nodes on expand/collapse operation.

Default value: func: OrgChart.anim.outPow, duration: 200

duration: defines how long time an animation should take to complete

func: Easing functions specify the speed at which an animation progresses at different points within the animation. Can accept one of the following values:

- OrgChart.anim.inPow
- OrgChart.anim.outPow
- OrgChart.anim.inOutPow
- OrgChart.anim.inSin
- OrgChart.anim.outSin
- OrgChart.anim.inOutSin
- OrgChart.anim.inExp
- OrgChart.anim.outExp
- OrgChart.anim.inOutExp
- OrgChart.anim.inCirc
- OrgChart.anim.outCirc
- OrgChart.anim.inOutCirc
- OrgChart.anim.rebound
- OrgChart.anim.inBack
- OrgChart.anim.outBack
- OrgChart.anim.inOutBack

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            anim: {
                func: OrgChart.anim.outBack,
                duration: 500
            },
            ...
        });  
 ```
        */
    anim?: Object,
    /**
     * Can be used to control the zooming sensitivity.

Default value: speed: 120, smooth: 12

Code example:
```
         var chart = new OrgChart(document.getElementById("tree"), {
            zoom: {
                speed: 130,
                smooth: 10
            },
            ...
        }); 
 ```   
     */
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