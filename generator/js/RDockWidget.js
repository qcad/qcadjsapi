
      // auto generated
      //var self;

      // class constructor:
      function RDockWidget() {
        

        // should be RDockWidget_BaseJs.call(this, engine):
        //RDockWidget.prototype = new RDockWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDockWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDockWidget);
            //}
          }
          else {
            qWarning("RDockWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDockWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDockWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDockWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDockWidget);
  }

  
  else {
    
        print("RDockWidget(): wrong number / type of arguments");
      
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
  
    this["featuresChanged(QDockWidget::DockWidgetFeatures)"] = Object.getPrototypeOf(this).featuresChanged;
  
    this["topLevelChanged(bool)"] = Object.getPrototypeOf(this).topLevelChanged;
  
    this["allowedAreasChanged(Qt::DockWidgetAreas)"] = Object.getPrototypeOf(this).allowedAreasChanged;
  
    this["visibilityChanged(bool)"] = Object.getPrototypeOf(this).visibilityChanged;
  
    this["dockLocationChanged(Qt::DockWidgetArea)"] = Object.getPrototypeOf(this).dockLocationChanged;
  
          }
        }
      }

      //RDockWidget.prototype = new RDockWidget_BaseJs(engine);
      //RDockWidget.prototype = new RDockWidget_Wrapper(engine);
      RDockWidget.prototype = new Object();

      RDockWidget.prototype.toString = function() {
          //return "RDockWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDockWidget [JS]";
        };
      RDockWidget.getObjectType = function() {
        return RJSType_RDockWidget.getIdStatic();
      };

      RDockWidget.prototype.getObjectType = function() {
        return RJSType_RDockWidget.getIdStatic();
      };

      RDockWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDockWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDockWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DockWidgetFeature
RDockWidget.DockWidgetClosable = RDockWidget_Wrapper.DockWidgetClosable;
RDockWidget.DockWidgetMovable = RDockWidget_Wrapper.DockWidgetMovable;
RDockWidget.DockWidgetFloatable = RDockWidget_Wrapper.DockWidgetFloatable;
RDockWidget.DockWidgetVerticalTitleBar = RDockWidget_Wrapper.DockWidgetVerticalTitleBar;
RDockWidget.DockWidgetFeatureMask = RDockWidget_Wrapper.DockWidgetFeatureMask;
RDockWidget.NoDockWidgetFeatures = RDockWidget_Wrapper.NoDockWidgetFeatures;
RDockWidget.Reserved = RDockWidget_Wrapper.Reserved;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDockWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDockWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    