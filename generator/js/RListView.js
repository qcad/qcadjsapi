
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
      

      // functions:
      

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
    