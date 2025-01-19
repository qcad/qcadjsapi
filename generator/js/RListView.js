
      // auto generated
      //var self;

      // class constructor:
      function RListView() {
        

        // should be RListView_BaseJs.call(this, engine):
        //RListView.prototype = new RListView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RListView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RListView);
            //}
          }
          else {
            qWarning("RListView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RListView_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RListView);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RListView);
  }

  
  else {
    
        print("RListView(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["signalContextMenuEvent(QContextMenuEvent*)"] = Object.getPrototypeOf(this).signalContextMenuEvent;
  
    this["signalMouseMoveEvent(QMouseEvent*)"] = Object.getPrototypeOf(this).signalMouseMoveEvent;
  
    this["signalMousePressEvent(QMouseEvent*)"] = Object.getPrototypeOf(this).signalMousePressEvent;
  
    this["signalMouseReleaseEvent(QMouseEvent*)"] = Object.getPrototypeOf(this).signalMouseReleaseEvent;
  
    this["signalDragEnterEvent(QDragEnterEvent*)"] = Object.getPrototypeOf(this).signalDragEnterEvent;
  
    this["signalDragMoveEvent(QDragMoveEvent*)"] = Object.getPrototypeOf(this).signalDragMoveEvent;
  
    this["signalDropEvent(QDropEvent*)"] = Object.getPrototypeOf(this).signalDropEvent;
  
    this["signalStartDrag(Qt::DropActions)"] = Object.getPrototypeOf(this).signalStartDrag;
  
    this["signalSelectionChanged(QItemSelection,QItemSelection)"] = Object.getPrototypeOf(this).signalSelectionChanged;
  
    this["signalCurrentChanged(QModelIndex,QModelIndex)"] = Object.getPrototypeOf(this).signalCurrentChanged;
  
    this["signalToolTipRequested(QHelpEvent*)"] = Object.getPrototypeOf(this).signalToolTipRequested;
  
          }
        }
      }

      //RListView.prototype = new RListView_BaseJs(engine);
      //RListView.prototype = new RListView_Wrapper(engine);
      RListView.prototype = new Object();

      RListView.prototype.toString = function() {
          //return "RListView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RListView [JS]";
        };
      RListView.getObjectType = function() {
        return RJSType_RListView.getIdStatic();
      };

      RListView.prototype.getObjectType = function() {
        return RJSType_RListView.getIdStatic();
      };

      RListView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RListView.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QListView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RListView.NoFrame = RListView_Wrapper.NoFrame;
RListView.Box = RListView_Wrapper.Box;
RListView.Panel = RListView_Wrapper.Panel;
RListView.WinPanel = RListView_Wrapper.WinPanel;
RListView.HLine = RListView_Wrapper.HLine;
RListView.VLine = RListView_Wrapper.VLine;
RListView.StyledPanel = RListView_Wrapper.StyledPanel;

  // enum: Shadow
RListView.Plain = RListView_Wrapper.Plain;
RListView.Raised = RListView_Wrapper.Raised;
RListView.Sunken = RListView_Wrapper.Sunken;

  // enum: StyleMask
RListView.Shadow_Mask = RListView_Wrapper.Shadow_Mask;
RListView.Shape_Mask = RListView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RListView.AdjustIgnored = RListView_Wrapper.AdjustIgnored;
RListView.AdjustToContentsOnFirstShow = RListView_Wrapper.AdjustToContentsOnFirstShow;
RListView.AdjustToContents = RListView_Wrapper.AdjustToContents;

  // enum: SelectionMode
RListView.NoSelection = RListView_Wrapper.NoSelection;
RListView.SingleSelection = RListView_Wrapper.SingleSelection;
RListView.MultiSelection = RListView_Wrapper.MultiSelection;
RListView.ExtendedSelection = RListView_Wrapper.ExtendedSelection;
RListView.ContiguousSelection = RListView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RListView.SelectItems = RListView_Wrapper.SelectItems;
RListView.SelectRows = RListView_Wrapper.SelectRows;
RListView.SelectColumns = RListView_Wrapper.SelectColumns;

  // enum: ScrollHint
RListView.EnsureVisible = RListView_Wrapper.EnsureVisible;
RListView.PositionAtTop = RListView_Wrapper.PositionAtTop;
RListView.PositionAtBottom = RListView_Wrapper.PositionAtBottom;
RListView.PositionAtCenter = RListView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RListView.NoEditTriggers = RListView_Wrapper.NoEditTriggers;
RListView.CurrentChanged = RListView_Wrapper.CurrentChanged;
RListView.DoubleClicked = RListView_Wrapper.DoubleClicked;
RListView.SelectedClicked = RListView_Wrapper.SelectedClicked;
RListView.EditKeyPressed = RListView_Wrapper.EditKeyPressed;
RListView.AnyKeyPressed = RListView_Wrapper.AnyKeyPressed;
RListView.AllEditTriggers = RListView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RListView.ScrollPerItem = RListView_Wrapper.ScrollPerItem;
RListView.ScrollPerPixel = RListView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RListView.NoDragDrop = RListView_Wrapper.NoDragDrop;
RListView.DragOnly = RListView_Wrapper.DragOnly;
RListView.DropOnly = RListView_Wrapper.DropOnly;
RListView.DragDrop = RListView_Wrapper.DragDrop;
RListView.InternalMove = RListView_Wrapper.InternalMove;

  // enum: Movement
RListView.Static = RListView_Wrapper.Static;
RListView.Free = RListView_Wrapper.Free;
RListView.Snap = RListView_Wrapper.Snap;

  // enum: Flow
RListView.LeftToRight = RListView_Wrapper.LeftToRight;
RListView.TopToBottom = RListView_Wrapper.TopToBottom;

  // enum: ResizeMode
RListView.Fixed = RListView_Wrapper.Fixed;
RListView.Adjust = RListView_Wrapper.Adjust;

  // enum: LayoutMode
RListView.SinglePass = RListView_Wrapper.SinglePass;
RListView.Batched = RListView_Wrapper.Batched;

  // enum: ViewMode
RListView.ListMode = RListView_Wrapper.ListMode;
RListView.IconMode = RListView_Wrapper.IconMode;


      // functions:
      
        // function 
        RListView.prototype.actionEvent = function() 
          
        {
          //print("JS: RListView.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListView);
  }

  
  else {
    
        print("RListView.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RListView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RListView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    