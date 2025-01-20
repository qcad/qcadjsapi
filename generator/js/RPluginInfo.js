
      // auto generated
      //var self;

      // class constructor:
      function RPluginInfo() {
        

        // should be RPluginInfo_BaseJs.call(this, engine):
        //RPluginInfo.prototype = new RPluginInfo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPluginInfo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPluginInfo);
                
            //}
          }
          else {
            qWarning("RPluginInfo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPluginInfo_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPluginInfo);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPluginInfo);
  }

  
  else {
    
        print("RPluginInfo(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RPluginInfo.prototype = new RPluginInfo_BaseJs(engine);
      //RPluginInfo.prototype = new RPluginInfo_Wrapper(engine);
      RPluginInfo.prototype = new Object();

      RPluginInfo.prototype.toString = function() {
          //return "RPluginInfo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPluginInfo [JS]";
        };
      RPluginInfo.getObjectType = function() {
        return RJSType_RPluginInfo.getIdStatic();
      };

      RPluginInfo.prototype.getObjectType = function() {
        return RJSType_RPluginInfo.getIdStatic();
      };

      RPluginInfo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPluginInfo.getIdStatic()) {
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
      //RPluginInfo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPluginInfo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      