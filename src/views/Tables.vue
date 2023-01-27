<template>
    <div class="row">
        <div class="col-12">

            <div id="ribbon">
                <div class="ribbon-window-title"></div>
                <div class="ribbon-tab" id="format-tab">
                    <span class="ribbon-title">File</span>
                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large" id="add-table-btn">
                            <span class="button-title">Details</span>
                            <span class="button-help">This button will add a table to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/list.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/list.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/list.png" />
                        </div>
                        <div class="ribbon-button ribbon-button-large" id="open-table-btn">
                            <span class="button-title">Preview</span>
                            <span class="button-help">This button will open a table and add it to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/search.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/search.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/search.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="open-table-btn">
                            <span class="button-title">S3 Key</span>
                            <span class="button-help">This button will open a table and add it to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/server.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/server.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/server.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Users</span>
                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <span class="button-title">Access Log</span>
                            <span class="button-help">This button will add a page to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/log-file.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/log-file.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/log-file.png" />
                        </div>
                    </div>
                    <div class="ribbon-section">
                        <span class="section-title">Edit</span>
                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <span class="button-title">Edit <br/> Name</span>
                            <span class="button-help">This button will add a page to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/id-card.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/id-card.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/id-card.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <span class="button-title">Replace</span>
                            <span class="button-help">This button will add a page to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/alter.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/alter.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/alter.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <span class="button-title">Move To</span>
                            <span class="button-help">This button will add a page to your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/package.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/package.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/package.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Data</span>
                        <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                            <span class="button-title">Columns</span>
                            <span class="button-help">This button will repeat something.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/vertical.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/vertical.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/vertical.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-small" id="run-btn">
                            <span class="button-title">Extract Columns</span>
                            <span class="button-help">This button will run the program.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/table_1.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/table_1.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/table_1.png" />
                        </div>

                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Bookmarks</span>
                        <div class="ribbon-button ribbon-button-small" id="run-btn">
                            <span class="button-title">Add To Bookmark List</span>
                            <span class="button-help">This button will run the program.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/book_1.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/book_1.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/book_1.png" />
                        </div>
                        <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                            <span class="button-title">Set Label</span>
                            <span class="button-help">This button will repeat something.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/price-label.png" />
                            <img class="ribbon-icon ribbon-hot" src="../assets/img/ribbon/price-label.png" />
                            <img class="ribbon-icon ribbon-disabled" src="../assets/img/ribbon/price-label.png" />
                        </div>
                    </div>

                </div>
                <div class="ribbon-tab" id="reports-tab">
                    <span class="ribbon-title">View</span>
                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large">
                            <span class="button-title">Refresh</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/refresh.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Filters</span>
                        <div class="ribbon-button ribbon-button-large">
                            <span class="button-title">Type</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/extension.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">Size</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/file.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">Date</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/calendar.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">Lookup <br/> Table</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/table.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Bookmarks</span>
                        <div class="ribbon-button ribbon-button-large">
                            <span class="button-title">Add</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/bookmark.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">All Bookmarks</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/book.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">Settings</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/settings.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title">Selection</span>
                        <div class="ribbon-button ribbon-button-small" id="run-btn">
                            <span class="button-title">Selected Files</span>
                            <span class="button-help">This button will run the program.</span>
                            <img class="ribbon-icon ribbon-normal" src="https://via.placeholder.com/15" />
                            <img class="ribbon-icon ribbon-hot" src="https://via.placeholder.com/15" />
                            <img class="ribbon-icon ribbon-disabled" src="https://via.placeholder.com/15" />
                        </div>
                        <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                            <span class="button-title">Configure Service Pricing</span>
                            <span class="button-help">This button will repeat something.</span>
                            <img class="ribbon-icon ribbon-normal" src="https://via.placeholder.com/30" />
                            <img class="ribbon-icon ribbon-hot" src="https://via.placeholder.com/30" />
                            <img class="ribbon-icon ribbon-disabled" src="https://via.placeholder.com/30" />
                        </div>
                    </div>
                </div>
                <div class="ribbon-tab" id="admin-tab">
                    <span class="ribbon-title">Import/Export</span>
                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large disabled">
                            <span class="button-title">Import<br/>File</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/import.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large disabled">
                            <span class="button-title">Import From<br/>Archive</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/archive.png" />
                        </div>
                    </div>


                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">Export <br/>Selection</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/export.png" />
                        </div>

                        <div class="ribbon-button ribbon-button-large" id="other-btn-2">
                            <span class="button-title">S3 Keys</span>
                            <span class="button-help">This button will remove the selected table from your document.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/key-chain.png" />
                        </div>
                    </div>
                </div>

                <div class="ribbon-tab" id="client-tab">
                    <span class="ribbon-title">Tasks</span>
                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large">
                            <span class="button-title">Deploy</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/deployment.png" />
                        </div>
                    </div>

                    <div class="ribbon-section">
                        <span class="section-title"></span>
                        <div class="ribbon-button ribbon-button-large">
                            <span class="button-title">Synchronize</span>
                            <span class="button-help">This button will do something else.</span>
                            <img class="ribbon-icon ribbon-normal" src="../assets/img/ribbon/synchronization.png" />
                        </div>
                    </div>
                </div>


                <div class="ribbon-static">
                     <br>
                    Last Update
                     <br>
                    10/25/2013 9:22:43 PM
                </div>
            </div>

            <div class="fancytree-grid-container flexbox-item-grow" style="height: 750px">
                <table id="treetable" width="100%">
                    <!-- <caption>Loading&hellip;</caption> -->
                    <colgroup>
                        <col width="10px">
                        <col width="1000px">
                        <col width="50px">
                        <col width="100px">
                    </colgroup>
                    <thead>
                    <tr>
                        <th width="10px"></th>
                        <th class="parent-path"></th>
                        <th>Size (bytes)</th>
                        <th>Last Modified</th>
                    </tr>
                    </thead>
                </table>
                <div id="verticalScrollbar" style="top:19px; height:calc(100% - 18px);"></div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars */

    import $ from 'jquery';

    import "jquery.fancytree/dist/modules/jquery.fancytree.ui-deps.js" ;
    import "jquery.fancytree/dist/modules/jquery.fancytree.js";
    import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';
    import "jquery.fancytree/dist/modules/jquery.fancytree.ariagrid.js";
    import "jquery.fancytree/dist/modules/jquery.fancytree.filter.js";
    import "jquery.fancytree/dist/modules/jquery.fancytree.grid.js";
    import "jquery.fancytree/dist/modules/jquery.fancytree.logger.js";
    import "jquery.fancytree/dist/modules/jquery.fancytree.childcounter.js";
    import PlainScrollbar from "../assets/PlainScrollbar/plain-scrollbar";

    export default {
        name: "tables",
        mounted() {
            $(function () {
                $("#optionsForm [name=cellFocus]").change(function (e) {
                    var value = $(this).find(":selected").val();

                    window.sessionStorage.setItem("cellFocus", value);
                    $.ui.fancytree.getTree("#treegrid").setOption("ariagrid.cellFocus", value);
                }).val(window.sessionStorage.getItem("cellFocus") || "allow");

                var modelCount = 0;

                var sourceUrl = "https://cdn.jsdelivr.net/gh/mar10/assets@master/fancytree/ajax_101k.json";


                $("#treetable").fancytree({
                    extensions: ["filter", "grid", "ariagrid", "childcounter"],
                    checkbox: true,
                    quicksearch: true,
                    autoScroll: true,
                    debugLevel: 3,
                    selectMode: 3,

                    ariagrid: {
                        // Internal behavior flags
                        activateCellOnDoubelclick: true,
                        cellFocus: $("#optionsForm [name=cellFocus]").find(":selected").val(),
                        label: "Tree Grid", // Added as `aria-label` attribute
                    },
                    childcounter: {
                        deep: true,
                        hideZeros: true,
                        hideExpanded: true
                    },
                    filter: {
                        autoExpand: true,
                    },
                    table: {
                        indentation: 20,       // indent 20px per node level
                        nodeColumnIdx: 1,      // render the node title into the 2nd column
                        checkboxColumnIdx: 0,  // render the checkboxes into the 1st column
                    },
                    viewport: {
                        enabled: true,
                        count: 15,
                    },
                    source: {
                        url: sourceUrl,
                        cache: true,
                    },
                    preInit: function(event, data) {
                        var tree = data.tree;

                        tree.verticalScrollbar = new PlainScrollbar({
                            alwaysVisible: true,
                            arrows: true,
                            orientation: "vertical",
                            onSet: function(numberOfItems) {
                                tree.debug("verticalScrollbar:onSet", numberOfItems);
                                tree.setViewport({
                                    start: Math.round(numberOfItems.start),
                                    // count: tree.viewport.count,
                                });
                            },
                            scrollbarElement: document.getElementById("verticalScrollbar"),
                        });

                    },
                    init: function (event, data) {
                        modelCount = data.tree.count();
                        $("#treetable caption").text("Loaded " + modelCount + " nodes.");
                        data.tree.adjustViewportSize();

                    },
                    lazyLoad: function (event, data) {
                        data.result = {url: "ajax-sub2.json"}
                    },
                    activateCell: function (event, data) {
                        data.node.debug(event.type, data);
                    },
                    defaultGridAction: function (event, data) {
                        // Called when ENTER is pressed in cell-mode.
                        data.node.debug(event.type, data);
                    },
                    renderColumns: function (event, data) {
                        var node = data.node, $tdList = $(node.tr).find(">td");
                        // (index #2 is rendered by fancytree)
                        //$tdList.eq(3).text(node._rowIdx);
                        // $tdList.eq(3).text(node.data.qty);
                    },
                    updateViewport: function (event, data) {
                        var tree = data.tree,
                            topNode = tree.visibleNodeList[tree.viewport.start],
                            path = (topNode && !topNode.isTopLevel()) ? topNode.getPath(false) + "/..." : "";

                        tree.debug(event.type, data);

                        // Display breadcrumb/parent-path in header
                        tree.$container.find("thead th.parent-path").text(path);

                        // Handle PlainScrollbar events
                        tree.verticalScrollbar.set({
                            start: tree.viewport.start,
                            total: tree.visibleNodeList.length,
                            visible: tree.viewport.count,
                        }, true);  // do not trigger `onSet`

                    },
                });

                $(window).on("resize", function (e) {
                    var tree = $.ui.fancytree.getTree();
                    tree.adjustViewportSize();
                }).resize();

                /* Handle inputs */
                $(document).on("change", "#vpStart,#vpCount", function (e) {
                    var tree = $.ui.fancytree.getTree(),
                        opts = {
                            start: $("#vpStart").val(),
                            count: $("#vpCount").val(),
                        };

                    tree.setViewport(opts);
                });

                $("input[name=search]").on("change search", function (e) {
                    if (e.type === "change" && e.target.onsearch !== undefined) {
                        // We fall back to handling the change event only if the search event is not supported.
                        return;
                    }
                    var n,
                        tree = $.ui.fancytree.getTree(),
                        match = $.trim($(this).val());

                    // Pass a string to perform case insensitive matching
                    n = tree.filterNodes(match, {mode: "hide"});

                    $("span.matches").text(n ? "(" + n + " matches)" : "");
                });

                (function( $ ){
                    $.fn.ribbon = function(id) {
                        if (!id) {
                            if (this.attr('id')) {
                                id = this.attr('id');
                            }
                        }

                        var that = function() {
                            return thatRet;
                        };

                        var thatRet = that;

                        that.selectedTabIndex = -1;

                        var tabNames = [];

                        that.goToBackstage = function() {
                            ribObj.addClass('backstage');
                        }

                        that.returnFromBackstage = function() {
                            ribObj.removeClass('backstage');
                        }
                        var ribObj = null;

                        that.init = function(id) {
                            if (!id) {
                                id = 'ribbon';
                            }

                            ribObj = $('#'+id);
                            ribObj.find('.ribbon-window-title').after('<div id="ribbon-tab-header-strip"></div>');
                            var header = ribObj.find('#ribbon-tab-header-strip');

                            ribObj.find('.ribbon-tab').each(function(index) {
                                var id = $(this).attr('id');
                                if (id == undefined || id == null)
                                {
                                    $(this).attr('id', 'tab-'+index);
                                    id = 'tab-'+index;
                                }
                                tabNames[index] = id;

                                var title = $(this).find('.ribbon-title');
                                var isBackstage = $(this).hasClass('file');
                                header.append('<div id="ribbon-tab-header-'+index+'" class="ribbon-tab-header"></div>');
                                var thisTabHeader = header.find('#ribbon-tab-header-'+index);
                                thisTabHeader.append(title);
                                if (isBackstage) {
                                    thisTabHeader.addClass('file');

                                    thisTabHeader.click(function() {
                                        that.switchToTabByIndex(index);
                                        that.goToBackstage();
                                    });
                                } else {
                                    if (that.selectedTabIndex==-1) {
                                        that.selectedTabIndex = index;
                                        thisTabHeader.addClass('sel');
                                    }

                                    thisTabHeader.click(function() {
                                        that.returnFromBackstage();
                                        that.switchToTabByIndex(index);
                                    });
                                }
                                $(this).hide();
                            });

                            ribObj.find('.ribbon-button').each(function(index) {
                                var title = $(this).find('.button-title');
                                title.detach();
                                $(this).append(title);

                                var el = $(this);

                                this.enable = function() {
                                    el.removeClass('disabled');
                                };

                                this.disable = function() {
                                    el.addClass('disabled');
                                };

                                this.isEnabled = function() {
                                    return !el.hasClass('disabled');
                                };

                                if ($(this).find('.ribbon-hot').length==0) {
                                    $(this).find('.ribbon-normal').addClass('ribbon-hot');
                                };

                                if ($(this).find('.ribbon-disabled').length==0) {
                                    $(this).find('.ribbon-normal').addClass('ribbon-disabled');
                                    $(this).find('.ribbon-normal').addClass('ribbon-implicit-disabled');
                                };

                            });

                            ribObj.find('.ribbon-section').each(function(index) {
                                $(this).after('<div class="ribbon-section-sep"></div>');
                            });

                            ribObj.find('div').attr('unselectable', 'on');
                            ribObj.find('span').attr('unselectable', 'on');
                            ribObj.attr('unselectable', 'on');

                            that.switchToTabByIndex(that.selectedTabIndex);
                        }

                        that.switchToTabByIndex = function(index) {
                            var headerStrip = $('#ribbon #ribbon-tab-header-strip');
                            headerStrip.find('.ribbon-tab-header').removeClass('sel');
                            headerStrip.find('#ribbon-tab-header-'+index).addClass('sel');

                            $('#ribbon .ribbon-tab').hide();
                            $('#ribbon #'+tabNames[index]).show();
                        }

                        $.fn.enable = function() {
                            if (this.hasClass('ribbon-button')) {
                                if (this[0] && this[0].enable) {
                                    this[0].enable();
                                }
                            }
                            else {
                                this.find('.ribbon-button').each(function() {
                                    $(this).enable();
                                });
                            }
                        }




                        $.fn.disable = function() {
                            if (this.hasClass('ribbon-button')) {
                                if (this[0] && this[0].disable) {
                                    this[0].disable();
                                }
                            }
                            else {
                                this.find('.ribbon-button').each(function() {
                                    $(this).disable();
                                });
                            }
                        }

                        $.fn.isEnabled = function() {
                            if (this[0] && this[0].isEnabled) {
                                return this[0].isEnabled();
                            } else {
                                return true;
                            }
                        }


                        that.init(id);

                        $.fn.ribbon = that;
                    };

                })( $ );

                $(document).ready(function () {
                    $('#ribbon').ribbon();

                    $('#enable-btn').click(function() {
                        $('#del-table-btn').enable();
                        $('#del-page-btn').enable();
                        $('#save-btn').enable();
                        $('#other-btn-2').enable();

                        $('#enable-btn').hide();
                        $('#disable-btn').show();
                    });
                    $('#disable-btn').click(function() {
                        $('#del-table-btn').disable();
                        $('#del-page-btn').disable();
                        $('#save-btn').disable();
                        $('#other-btn-2').disable();

                        $('#disable-btn').hide();
                        $('#enable-btn').show();
                    });

                    $('.ribbon-button').click(function() {
                        if (this.isEnabled()) {
                            alert($(this).attr('id') + ' clicked');
                        }
                    });
                });
            });
        },
        data() {
            return {};
        },
        components: {},
    };
</script>

<style type="text/css">

    .ui-menu {
        width: 100px;
        font-size: 63%;
        z-index: 3; /* over ext-wide titles */
    }

    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    html, body.flexbox-body {
        height: 100%;
        padding: 0;
        margin: 0;
    }
    .page-container {
        /* background: rgba(255, 255, 255, .1); */
        padding: 10px;
    }
    .flexbox-parent {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: flex-start; /* align items in Main Axis */
        align-items: stretch; /* align items in Cross Axis */
        align-content: stretch; /* Extra space in Cross Axis */
    }
    .flexbox-item {
        padding: 8px;
    }
    .flexbox-item-grow {
        flex: 1; /* same as flex: 1 1 auto; */
    }

    /* .flexbox-item.header {
        background: rgba(255, 0, 0, .1);
    }
    .flexbox-item.footer {
        background: rgba(0, 255, 0, .1);
    }
    .flexbox-item.content {
        background: rgba(0, 0, 255, .1);
    } */
    .fill-area {
        display: flex;
        flex-direction: row;

        justify-content: flex-start; /* align items in Main Axis */
        align-items: stretch; /* align items in Cross Axis */
        align-content: stretch; /* Extra space in Cross Axis */

    }
    .fill-area-content {
        background: rgba(0, 0, 0, .3);
        border: 1px solid #000000;

        /* Needed for when the area gets squished too far and there is content that can't be displayed */
        overflow: auto;
    }

    header, footer {
        /* flex: 0 0; */
        background-color: #f7f7f7;
        /* padding: 1rem; */
    }
    /* custom alignment (set by 'renderColumns' event) */
    table.fancytree-ext-table {
        /* flex: 1; */
        width: 100%;
        border-collapse: collapse;
        border: 1px dotted #f4f4f8;
        caption-side: bottom;
    }
    /* Support scrolling  */
    div.fancytree-grid-container {
        /* Use whole parent heigt*/
        flex: 1;
        /* Stretch embedded table */
        display: flex;
        flex-direction: column;
        min-height: 30px;
        /*  */
        padding: 0;
        border: 1px solid gray;
        /* The div should not be stretched by the content rows, because we want to
           adust the row count from div height instead: */
        overflow-y: hidden;

        position: relative;
        padding-right: 16px;
    }

    div.fancytree-grid-container > table.fancytree-ext-grid {
        flex: 1;
        width: 100%;
        border: 0;
        margin: 1px 0 1px 0;  /* 1px above and below. */
    }
    /* Ext-grid breaks if another extension hides rows. */
    table.fancytree-ext-grid tbody tr.fancytree-hide {
        display: table-row;
    }

    /* Set alternating row colors (define BEFORE standard css). */
    table.fancytree-ext-table tbody tr:nth-child(even){
        background-color: #fafafa;
    }

    table.fancytree-ext-table thead th.parent-path {
        text-align: left;
    }
    table.fancytree-ext-table td:nth-child(2) {
        width: 50px;
    }
    table.fancytree-ext-table td:nth-child(4) {
        text-align: right;
    }
    table.fancytree-ext-table td:nth-child(5) {
        text-align: center;
    }
    /* PlainScrollbar-specific Styles */
    .plain-scrollbar[data-scrollable="false"] {
        visibility: hidden;
    }







    @media screen and (max-width: 768px) {
        .ribbon-static {
            display: none !important;
        }
    }

    .page
    {
        border: 1px solid #a5acb5;
        margin: 20px;
        padding: 15px;
        -webkit-box-shadow: #000000 0px 0px 10px;
        -moz-box-shadow: #000000 0px 0px 10px;
        box-shadow: #000000 0px 0px 10px;
        background: #FFF;
    }

    .ribbon-static {
        display:block;
        float: right;
        text-align: center;
        font-size: 12px;
        margin-right: 40px;
        margin-top: -120px;
    }

    #ribbon
    {
        font-family: "Segoe UI" , Verdana, Tahoma, Helvetica, sans-serif;
        cursor: default;
        font-size: 8pt;
        padding-top: 0px;
        background-color: #eaedf1;
        border-bottom: 1px solid #8b9097;
        -webkit-box-shadow: #8b9097 0px 1px 3px;
        -moz-box-shadow: #8b9097 0px 1px 3px;
        box-shadow: #8b9097 0px 1px 3px;
        overflow: overlay;
        z-index: 25;
        top: 0;
        left: 0;
        right: 0;
        height: 160px;
        min-width: 768px;
    }

    #ribbon.backstage
    {
        height: auto;
        bottom: 0;
    }

    #ribbon .ribbon-window-title
    {

    }

    #ribbon #ribbon-tab-header-strip
    {
        margin: 20px 0 0 10px;
        white-space: nowrap;
    }

    #ribbon .ribbon-tab-header
    {
        display: inline;
        margin: 0 5px;
        padding: 5px 10px;
        font-size: 8pt;
        color: #444; /*border: 1px solid #eaedf1;*/
        border-bottom: 0px solid #fff;
        -webkit-border-radius: 4px 4px 0px 0px;
        -moz-border-radius: 4px 4px 0px 0px;
        border-radius: 4px 4px 0px 0px;
        position: relative;
        z-index: 40;
    }

    #ribbon.backstage .ribbon-tab-header
    {
        border-bottom: 1px solid #1f48a1;
    }

    #ribbon .ribbon-tab-header:hover
    {
        background: #f1f3f4;
        border: 1px solid #b6babf;
        margin: -1px 4px;
        cursor: pointer;
    }

    #ribbon.backstage .ribbon-tab-header
    {
        border-bottom: 1px solid #1f48a1;
    }

    #ribbon .ribbon-tab-header.sel, #ribbon .ribbon-tab-header.sel:hover
    {
        background: #fff;
        margin: -1px 4px;
        border: 1px solid #b6babf;
        border-bottom: 1px solid #fff;
        cursor: default;
        z-index: 45;
    }

    #ribbon .ribbon-tab-header.file
    {
        padding: 5px 20px;
        background: #2860b3;
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#4488e5), to(#2860b3));
        background: -moz-linear-gradient(#4488e5, #2860b3);
        -pie-background: linear-gradient(#4488e5, #2860b3);
        border: 1px solid #1f48a1;
        margin: -1px 4px;
        border-bottom: 1px solid #4488e5;
        cursor: default;
        color: #fff;
    }


    #ribbon .ribbon-tab-header.file:hover
    {
        background: #3870c3;
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#5498f5), to(#3870c3));
        background: -moz-linear-gradient(#5498f5, #3870c3);
        -pie-background: linear-gradient(#5498f5, #3870c3);
        border: 1px solid #1f48a1;
        cursor: pointer;
        border-bottom: 1px solid #4488e5;
        z-index: 55;
        position: relative;
    }
    #ribbon .ribbon-tab-header.file.sel
    {
        background: #4488e5;
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#2860b3), to(#4488e5));
        background: -moz-linear-gradient(#2860b3, #4488e5);
        -pie-background: linear-gradient(#2860b3, #4488e5);
        border: 1px solid #1f48a1;
        cursor: pointer;
        border-bottom: 1px solid #4488e5;
        z-index: 55;
        position: relative;
    }

    #ribbon .ribbon-tab
    {
        height: 120px;
        padding: 5px;
        margin-top: 5px;
        border-top: 0px solid #b6babf;
        background: #FFF repeat-x bottom;
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffffff), to(#eaedf1));
        background: -moz-linear-gradient(#ffffff, #eaedf1); /*-pie-background: linear-gradient(#ffffff, #eaedf1);*/
        overflow: hidden;
        min-width: 500px;
        z-index: 30;
        -pie-watch-ancestors: 2;
    }

    #ribbon .ribbon-tab.file
    {
        padding: 0;
        margin-top: 5px;
        border-top: 1px solid #1f48a1;

        background-color:#4488e5;
        filter:progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr=#4488e5, endColorstr=#ffffff);
        background-image:-moz-linear-gradient(left, #4488e5 15%, #ffffff 100%);
        background-image:-webkit-linear-gradient(left, #4488e5 15%, #ffffff 100%);
        background-image:-ms-linear-gradient(left, #4488e5 15%, #ffffff 100%);
        background-image:linear-gradient(left, #4488e5 15%, #ffffff 100%);
        background-image:-o-linear-gradient(left, #4488e5 15%, #ffffff 100%);
        background-image:-webkit-gradient(linear, left bottom, right bottom, color-stop(15%,#4488e5), color-stop(100%,#ffffff));


        overflow: hidden;
        min-width: 500px;
        z-index: 30;
    }

    #ribbon .ribbon-backstage
    {
        display: none;
    }


    #ribbon.backstage .ribbon-backstage
    {
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        background-color: #FFF;
    }

    #ribbon .section-title
    {
        color: #5B626C;
        text-align: center;
        clear: left;
        display: block;
        position: absolute;
        bottom: -12px;
        left: 0;
        right: 0;

    }

    #ribbon .ribbon-section
    {
        float: left;
        position: relative;
        height: 82px;
    }

    #ribbon .ribbon-section-sep
    {
        border-left: 1px solid #E0E0E0;
        border-right: 1px solid #fff;
        margin: 0 5px;
        height: 75px;
        position: relative;
        width: 0;
        float: left;
    }

    #ribbon .ribbon-button
    {
        padding: 4px 6px;
        border: 1px solid transparent;
        -webkit-border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        border-radius: 3px 3px 3px 3px;

    }

    #ribbon .ribbon-button-large
    {
        text-align: center;
        height: 75px;
        min-width: 44px;
        float: left;
    }

    #ribbon .ribbon-button-small
    {
        height: 25px;
        padding: 3px 4px;
        text-align: left;

    }

    #ribbon .ribbon-button .button-help
    {
        display: none;
    }

    #ribbon .ribbon-button .button-title
    {
        color: #444;
    }

    #ribbon .ribbon-button-large .button-title
    {
        clear: left;
        display: block;
    }

    #ribbon .ribbon-button-large .ribbon-icon
    {
        margin: auto;
    }

    #ribbon .ribbon-button-small .ribbon-icon
    {
        width: 16px;
        height: 16px;
        float: left;
        clear: left;
        margin: -1px 5px 0px 1px;
    }
    #ribbon .ribbon-button .ribbon-icon.ribbon-hot, #ribbon .ribbon-button .ribbon-icon.ribbon-disabled
    {
        display: none;
    }

    #ribbon .ribbon-button-large .ribbon-icon.ribbon-normal
    {
        display: block;
    }

    #ribbon .ribbon-button:hover .ribbon-icon.ribbon-normal
    {
        display: none;
    }

    #ribbon .ribbon-button-large:hover .ribbon-icon.ribbon-hot
    {
        display: block;
    }
    #ribbon .ribbon-button-small .ribbon-icon.ribbon-normal
    {
        display: inline;
    }

    #ribbon .ribbon-button-small:hover .ribbon-icon.ribbon-hot
    {
        display: inline;
    }

    #ribbon .ribbon-button:hover, #ribbon .ribbon-button.sel
    {
        border: 1px solid #F1C43F;
        background: #fdeeb3;
        cursor: pointer;

    }
    #ribbon .ribbon-button:active
    {
        border: 1px solid #F1C43F;
        background: #F1C43F;
        cursor: pointer;
    }

    #ribbon .ribbon-button.disabled .ribbon-icon, #ribbon .ribbon-button.disabled:hover .ribbon-icon
    {
        display: none;
    }
    #ribbon .ribbon-button.disabled .ribbon-icon.ribbon-disabled
    {
        display: block;
        opacity: 0.8;

    }
    #ribbon .ribbon-button.disabled .ribbon-icon.ribbon-implicit-disabled
    {
        opacity: 0.4;
    }

    #ribbon .ribbon-button.disabled:hover
    {
        border: 1px solid transparent;
        background: transparent;
        cursor: default;
    }
    #ribbon .ribbon-button.disabled:active
    {
        border: 1px solid transparent;
        background: transparent;
        cursor: default;
    }

    #ribbon .ribbon-button.disabled .button-title
    {
        color: #888;
    }

    .ribbon-tooltip
    {
        font-family: "Segoe UI" , Verdana, Tahoma, Helvetica, sans-serif;
        font-size: 10pt;
        position: fixed;
        z-index: 5000;
        border: 1px solid #8b9097;
        background-color: #e5e5f0;
        background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffffff), to(#e5e5f0));
        background: -moz-linear-gradient(#ffffff, #e5e5f0);
        -pie-background: linear-gradient(#ffffff, #e5e5f0);
        padding: 5px;
        -webkit-box-shadow: #c6c9cd 1px 1px 3px;
        -moz-box-shadow: #c6c9cd 1px 1px 3px;
        box-shadow: #c6c9cd 1px 1px 3px;
        -webkit-border-radius: 2px 2px 2px 2px;
        -moz-border-radius: 2px 2px 2px 2px;
        border-radius: 2px 2px 2px 2px;
        width: 200px;
        top: 150px !important;
    }

</style>