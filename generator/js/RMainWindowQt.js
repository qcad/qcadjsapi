
      // auto generated
      //var self;

      // class constructor:
      function RMainWindowQt() {
        

        // should be RMainWindowQt_BaseJs.call(this, engine):
        //RMainWindowQt.prototype = new RMainWindowQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMainWindowQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RMainWindowQt);
                
            //}
          }
          else {
            qWarning("RMainWindowQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RMainWindowQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RMainWindowQt);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMainWindowQt);
  }

  
  else {
    
        print("RMainWindowQt(): wrong number / type of arguments");
      
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
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["toolButtonStyleChanged(Qt::ToolButtonStyle)"] = Object.getPrototypeOf(this).toolButtonStyleChanged;
  
    this["tabifiedDockWidgetActivated(QDockWidget*)"] = Object.getPrototypeOf(this).tabifiedDockWidgetActivated;
  
    this["commandPrompt(QString)"] = Object.getPrototypeOf(this).commandPrompt;
  
    this["leftMouseTip(QString)"] = Object.getPrototypeOf(this).leftMouseTip;
  
    this["rightMouseTip(QString)"] = Object.getPrototypeOf(this).rightMouseTip;
  
    this["progress(int)"] = Object.getPrototypeOf(this).progress;
  
    this["progressText(QString)"] = Object.getPrototypeOf(this).progressText;
  
    this["userMessage(QString,bool)"] = Object.getPrototypeOf(this).userMessage;
  
    this["userInfo(QString,bool)"] = Object.getPrototypeOf(this).userInfo;
  
    this["userWarning(QString,bool,bool)"] = Object.getPrototypeOf(this).userWarning;
  
    this["userCommand(QString,bool)"] = Object.getPrototypeOf(this).userCommand;
  
    this["contextMenu(int,RVector)"] = Object.getPrototypeOf(this).contextMenu;
  
    this["editResourceBlock(int,RVector)"] = Object.getPrototypeOf(this).editResourceBlock;
  
    this["drop(QDropEvent*)"] = Object.getPrototypeOf(this).drop;
  
    this["dragEnter(QDragEnterEvent*)"] = Object.getPrototypeOf(this).dragEnter;
  
    this["resumedTab(RMdiChildQt*)"] = Object.getPrototypeOf(this).resumedTab;
  
    this["toolBarContextMenu(QMenu*)"] = Object.getPrototypeOf(this).toolBarContextMenu;
  
            }
          
        }

        

      }

      //RMainWindowQt.prototype = new RMainWindowQt_BaseJs(engine);
      //RMainWindowQt.prototype = new RMainWindowQt_Wrapper(engine);
      RMainWindowQt.prototype = new Object();

      RMainWindowQt.prototype.toString = function() {
          //return "RMainWindowQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMainWindowQt [JS]";
        };
      RMainWindowQt.getObjectType = function() {
        return RJSType_RMainWindowQt.getIdStatic();
      };

      RMainWindowQt.prototype.getObjectType = function() {
        return RJSType_RMainWindowQt.getIdStatic();
      };

      RMainWindowQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMainWindowQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RMainWindow.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMainWindow.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DockOption
RMainWindowQt.AnimatedDocks = RMainWindowQt_Wrapper.AnimatedDocks;
RMainWindowQt.AllowNestedDocks = RMainWindowQt_Wrapper.AllowNestedDocks;
RMainWindowQt.AllowTabbedDocks = RMainWindowQt_Wrapper.AllowTabbedDocks;
RMainWindowQt.ForceTabbedDocks = RMainWindowQt_Wrapper.ForceTabbedDocks;
RMainWindowQt.VerticalTabs = RMainWindowQt_Wrapper.VerticalTabs;
RMainWindowQt.GroupedDragging = RMainWindowQt_Wrapper.GroupedDragging;


      // functions:
      

      // static functions:
      

        // static function 
        RMainWindowQt.getMainWindow = function() 
          
        {
          //print("JS: RMainWindowQt.getMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindowQt_WrapperSingletonInstance.getMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindowQt);
  }

  
  else {
    
        print("RMainWindowQt.getMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMainWindowQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMainWindowQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      