
      // auto generated
      //var self;

      // class constructor:
      function RTreeWidget() {
        

        // should be RTreeWidget_BaseJs.call(this, engine):
        //RTreeWidget.prototype = new RTreeWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTreeWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RTreeWidget);
                
            //}
          }
          else {
            qWarning("RTreeWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RTreeWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RTreeWidget);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget(): wrong number / type of arguments");
      
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
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["expanded(QModelIndex)"] = Object.getPrototypeOf(this).expanded;
  
    this["collapsed(QModelIndex)"] = Object.getPrototypeOf(this).collapsed;
  
    this["itemPressed(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["itemExpanded(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemExpanded;
  
    this["itemCollapsed(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemCollapsed;
  
    this["currentItemChanged(QTreeWidgetItem*,QTreeWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
    this["itemColumnClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemColumnClicked;
  
    this["contextMenuRequested(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).contextMenuRequested;
  
            }
          
        }

        

      }

      //RTreeWidget.prototype = new RTreeWidget_BaseJs(engine);
      //RTreeWidget.prototype = new RTreeWidget_Wrapper(engine);
      RTreeWidget.prototype = new Object();

      RTreeWidget.prototype.toString = function() {
          //return "RTreeWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTreeWidget [JS]";
        };
      RTreeWidget.getObjectType = function() {
        return RJSType_RTreeWidget.getIdStatic();
      };

      RTreeWidget.prototype.getObjectType = function() {
        return RJSType_RTreeWidget.getIdStatic();
      };

      RTreeWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTreeWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
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
        
          if (t===RJSType_QTreeView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTreeWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RTreeWidget.NoFrame = RTreeWidget_Wrapper.NoFrame;
RTreeWidget.Box = RTreeWidget_Wrapper.Box;
RTreeWidget.Panel = RTreeWidget_Wrapper.Panel;
RTreeWidget.WinPanel = RTreeWidget_Wrapper.WinPanel;
RTreeWidget.HLine = RTreeWidget_Wrapper.HLine;
RTreeWidget.VLine = RTreeWidget_Wrapper.VLine;
RTreeWidget.StyledPanel = RTreeWidget_Wrapper.StyledPanel;

  // enum: Shadow
RTreeWidget.Plain = RTreeWidget_Wrapper.Plain;
RTreeWidget.Raised = RTreeWidget_Wrapper.Raised;
RTreeWidget.Sunken = RTreeWidget_Wrapper.Sunken;

  // enum: StyleMask
RTreeWidget.Shadow_Mask = RTreeWidget_Wrapper.Shadow_Mask;
RTreeWidget.Shape_Mask = RTreeWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RTreeWidget.AdjustIgnored = RTreeWidget_Wrapper.AdjustIgnored;
RTreeWidget.AdjustToContentsOnFirstShow = RTreeWidget_Wrapper.AdjustToContentsOnFirstShow;
RTreeWidget.AdjustToContents = RTreeWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
RTreeWidget.NoSelection = RTreeWidget_Wrapper.NoSelection;
RTreeWidget.SingleSelection = RTreeWidget_Wrapper.SingleSelection;
RTreeWidget.MultiSelection = RTreeWidget_Wrapper.MultiSelection;
RTreeWidget.ExtendedSelection = RTreeWidget_Wrapper.ExtendedSelection;
RTreeWidget.ContiguousSelection = RTreeWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RTreeWidget.SelectItems = RTreeWidget_Wrapper.SelectItems;
RTreeWidget.SelectRows = RTreeWidget_Wrapper.SelectRows;
RTreeWidget.SelectColumns = RTreeWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
RTreeWidget.EnsureVisible = RTreeWidget_Wrapper.EnsureVisible;
RTreeWidget.PositionAtTop = RTreeWidget_Wrapper.PositionAtTop;
RTreeWidget.PositionAtBottom = RTreeWidget_Wrapper.PositionAtBottom;
RTreeWidget.PositionAtCenter = RTreeWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RTreeWidget.NoEditTriggers = RTreeWidget_Wrapper.NoEditTriggers;
RTreeWidget.CurrentChanged = RTreeWidget_Wrapper.CurrentChanged;
RTreeWidget.DoubleClicked = RTreeWidget_Wrapper.DoubleClicked;
RTreeWidget.SelectedClicked = RTreeWidget_Wrapper.SelectedClicked;
RTreeWidget.EditKeyPressed = RTreeWidget_Wrapper.EditKeyPressed;
RTreeWidget.AnyKeyPressed = RTreeWidget_Wrapper.AnyKeyPressed;
RTreeWidget.AllEditTriggers = RTreeWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RTreeWidget.ScrollPerItem = RTreeWidget_Wrapper.ScrollPerItem;
RTreeWidget.ScrollPerPixel = RTreeWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RTreeWidget.NoDragDrop = RTreeWidget_Wrapper.NoDragDrop;
RTreeWidget.DragOnly = RTreeWidget_Wrapper.DragOnly;
RTreeWidget.DropOnly = RTreeWidget_Wrapper.DropOnly;
RTreeWidget.DragDrop = RTreeWidget_Wrapper.DragDrop;
RTreeWidget.InternalMove = RTreeWidget_Wrapper.InternalMove;


      // functions:
      
      // function 
      RTreeWidget.prototype.mousePressEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mousePressEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mousePressEvent(
                // call highest level JS implementation:
                //return this.mousePressEventBase(
                
                    return this.mousePressEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mousePressEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.mouseReleaseEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mouseReleaseEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseReleaseEvent(
                // call highest level JS implementation:
                //return this.mouseReleaseEventBase(
                
                    return this.mouseReleaseEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mouseReleaseEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.mouseMoveEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mouseMoveEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseMoveEvent(
                // call highest level JS implementation:
                //return this.mouseMoveEventBase(
                
                    return this.mouseMoveEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mouseMoveEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.resizeEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.resizeEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.resizeEvent(
                // call highest level JS implementation:
                //return this.resizeEventBase(
                
                    return this.resizeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.resizeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTreeWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTreeWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      