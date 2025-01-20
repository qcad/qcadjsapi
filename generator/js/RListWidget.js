
      // auto generated
      //var self;

      // class constructor:
      function RListWidget() {
        

        // should be RListWidget_BaseJs.call(this, engine):
        //RListWidget.prototype = new RListWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RListWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RListWidget);
                
            //}
          }
          else {
            qWarning("RListWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RListWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RListWidget);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget(): wrong number / type of arguments");
      
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
  
    this["itemPressed(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QListWidgetItem*)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["currentItemChanged(QListWidgetItem*,QListWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
    this["currentTextChanged(QString)"] = Object.getPrototypeOf(this).currentTextChanged;
  
    this["currentRowChanged(int)"] = Object.getPrototypeOf(this).currentRowChanged;
  
    this["iconClicked(int,QListWidgetItem*)"] = Object.getPrototypeOf(this).iconClicked;
  
            }
          
        }

        

      }

      //RListWidget.prototype = new RListWidget_BaseJs(engine);
      //RListWidget.prototype = new RListWidget_Wrapper(engine);
      RListWidget.prototype = new Object();

      RListWidget.prototype.toString = function() {
          //return "RListWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RListWidget [JS]";
        };
      RListWidget.getObjectType = function() {
        return RJSType_RListWidget.getIdStatic();
      };

      RListWidget.prototype.getObjectType = function() {
        return RJSType_RListWidget.getIdStatic();
      };

      RListWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RListWidget.getIdStatic()) {
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
        
          if (t===RJSType_QListWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RListWidget.NoFrame = RListWidget_Wrapper.NoFrame;
RListWidget.Box = RListWidget_Wrapper.Box;
RListWidget.Panel = RListWidget_Wrapper.Panel;
RListWidget.WinPanel = RListWidget_Wrapper.WinPanel;
RListWidget.HLine = RListWidget_Wrapper.HLine;
RListWidget.VLine = RListWidget_Wrapper.VLine;
RListWidget.StyledPanel = RListWidget_Wrapper.StyledPanel;

  // enum: Shadow
RListWidget.Plain = RListWidget_Wrapper.Plain;
RListWidget.Raised = RListWidget_Wrapper.Raised;
RListWidget.Sunken = RListWidget_Wrapper.Sunken;

  // enum: StyleMask
RListWidget.Shadow_Mask = RListWidget_Wrapper.Shadow_Mask;
RListWidget.Shape_Mask = RListWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RListWidget.AdjustIgnored = RListWidget_Wrapper.AdjustIgnored;
RListWidget.AdjustToContentsOnFirstShow = RListWidget_Wrapper.AdjustToContentsOnFirstShow;
RListWidget.AdjustToContents = RListWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
RListWidget.NoSelection = RListWidget_Wrapper.NoSelection;
RListWidget.SingleSelection = RListWidget_Wrapper.SingleSelection;
RListWidget.MultiSelection = RListWidget_Wrapper.MultiSelection;
RListWidget.ExtendedSelection = RListWidget_Wrapper.ExtendedSelection;
RListWidget.ContiguousSelection = RListWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RListWidget.SelectItems = RListWidget_Wrapper.SelectItems;
RListWidget.SelectRows = RListWidget_Wrapper.SelectRows;
RListWidget.SelectColumns = RListWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
RListWidget.EnsureVisible = RListWidget_Wrapper.EnsureVisible;
RListWidget.PositionAtTop = RListWidget_Wrapper.PositionAtTop;
RListWidget.PositionAtBottom = RListWidget_Wrapper.PositionAtBottom;
RListWidget.PositionAtCenter = RListWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RListWidget.NoEditTriggers = RListWidget_Wrapper.NoEditTriggers;
RListWidget.CurrentChanged = RListWidget_Wrapper.CurrentChanged;
RListWidget.DoubleClicked = RListWidget_Wrapper.DoubleClicked;
RListWidget.SelectedClicked = RListWidget_Wrapper.SelectedClicked;
RListWidget.EditKeyPressed = RListWidget_Wrapper.EditKeyPressed;
RListWidget.AnyKeyPressed = RListWidget_Wrapper.AnyKeyPressed;
RListWidget.AllEditTriggers = RListWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RListWidget.ScrollPerItem = RListWidget_Wrapper.ScrollPerItem;
RListWidget.ScrollPerPixel = RListWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RListWidget.NoDragDrop = RListWidget_Wrapper.NoDragDrop;
RListWidget.DragOnly = RListWidget_Wrapper.DragOnly;
RListWidget.DropOnly = RListWidget_Wrapper.DropOnly;
RListWidget.DragDrop = RListWidget_Wrapper.DragDrop;
RListWidget.InternalMove = RListWidget_Wrapper.InternalMove;

  // enum: Movement
RListWidget.Static = RListWidget_Wrapper.Static;
RListWidget.Free = RListWidget_Wrapper.Free;
RListWidget.Snap = RListWidget_Wrapper.Snap;

  // enum: Flow
RListWidget.LeftToRight = RListWidget_Wrapper.LeftToRight;
RListWidget.TopToBottom = RListWidget_Wrapper.TopToBottom;

  // enum: ResizeMode
RListWidget.Fixed = RListWidget_Wrapper.Fixed;
RListWidget.Adjust = RListWidget_Wrapper.Adjust;

  // enum: LayoutMode
RListWidget.SinglePass = RListWidget_Wrapper.SinglePass;
RListWidget.Batched = RListWidget_Wrapper.Batched;

  // enum: ViewMode
RListWidget.ListMode = RListWidget_Wrapper.ListMode;
RListWidget.IconMode = RListWidget_Wrapper.IconMode;


      // functions:
      
      // function 
      RListWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: RListWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RListWidget.prototype.contextMenuEvent = function() 
        
      {
        //print("JS: RListWidget.prototype.contextMenuEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.contextMenuEvent(
                // call highest level JS implementation:
                //return this.contextMenuEventBase(
                
                    return this.contextMenuEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget.contextMenuEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RListWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RListWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      