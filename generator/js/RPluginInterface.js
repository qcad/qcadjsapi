
      // auto generated
      //var self;

      // class constructor:
      function RPluginInterface() {
        

        // should be RPluginInterface_BaseJs.call(this, engine):
        //RPluginInterface.prototype = new RPluginInterface_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPluginInterface.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPluginInterface);
            //}
          }
          else {
            qWarning("RPluginInterface.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPluginInterface.js: No constructor found for class RPluginInterface");
            
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
            
          }
        }
      }

      //RPluginInterface.prototype = new RPluginInterface_BaseJs(engine);
      //RPluginInterface.prototype = new RPluginInterface_Wrapper(engine);
      RPluginInterface.prototype = new Object();

      RPluginInterface.prototype.toString = function() {
          //return "RPluginInterface [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPluginInterface [JS]";
        };
      RPluginInterface.getObjectType = function() {
        return RJSType_RPluginInterface.getIdStatic();
      };

      RPluginInterface.prototype.getObjectType = function() {
        return RJSType_RPluginInterface.getIdStatic();
      };

      RPluginInterface.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPluginInterface.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: InitStatus
RPluginInterface.GotSplashWindow = RPluginInterface_Wrapper.GotSplashWindow;
RPluginInterface.AddOnsInitialized = RPluginInterface_Wrapper.AddOnsInitialized;
RPluginInterface.ActionsAdded = RPluginInterface_Wrapper.ActionsAdded;
RPluginInterface.GotMainWindowBeforeShow = RPluginInterface_Wrapper.GotMainWindowBeforeShow;
RPluginInterface.GotMainWindow = RPluginInterface_Wrapper.GotMainWindow;
RPluginInterface.LoadedFiles = RPluginInterface_Wrapper.LoadedFiles;
RPluginInterface.ScriptsExecuted = RPluginInterface_Wrapper.ScriptsExecuted;
RPluginInterface.AllDone = RPluginInterface_Wrapper.AllDone;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPluginInterface.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPluginInterface.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    