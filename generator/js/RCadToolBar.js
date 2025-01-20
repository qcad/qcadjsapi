
      // auto generated
      //var self;

      // class constructor:
      function RCadToolBar() {
        

        // should be RCadToolBar_BaseJs.call(this, engine):
        //RCadToolBar.prototype = new RCadToolBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCadToolBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RCadToolBar);
                
            //}
          }
          else {
            qWarning("RCadToolBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RCadToolBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RCadToolBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCadToolBar);
  }

  
  else {
    
        print("RCadToolBar(): wrong number / type of arguments");
      
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
  
    this["actionTriggered(QAction*)"] = Object.getPrototypeOf(this).actionTriggered;
  
    this["movableChanged(bool)"] = Object.getPrototypeOf(this).movableChanged;
  
    this["allowedAreasChanged(Qt::ToolBarAreas)"] = Object.getPrototypeOf(this).allowedAreasChanged;
  
    this["orientationChanged(Qt::Orientation)"] = Object.getPrototypeOf(this).orientationChanged;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["toolButtonStyleChanged(Qt::ToolButtonStyle)"] = Object.getPrototypeOf(this).toolButtonStyleChanged;
  
    this["topLevelChanged(bool)"] = Object.getPrototypeOf(this).topLevelChanged;
  
    this["visibilityChanged(bool)"] = Object.getPrototypeOf(this).visibilityChanged;
  
            }
          
        }

        

      }

      //RCadToolBar.prototype = new RCadToolBar_BaseJs(engine);
      //RCadToolBar.prototype = new RCadToolBar_Wrapper(engine);
      RCadToolBar.prototype = new Object();

      RCadToolBar.prototype.toString = function() {
          //return "RCadToolBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCadToolBar [JS]";
        };
      RCadToolBar.getObjectType = function() {
        return RJSType_RCadToolBar.getIdStatic();
      };

      RCadToolBar.prototype.getObjectType = function() {
        return RJSType_RCadToolBar.getIdStatic();
      };

      RCadToolBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCadToolBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QToolBar.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RCadToolBar.prototype.actionEvent = function() 
        
      {
        //print("JS: RCadToolBar.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCadToolBar);
  }

  
  else {
    
        print("RCadToolBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCadToolBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCadToolBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      