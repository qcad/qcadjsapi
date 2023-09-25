
      // auto generated
      //var self;

      // class constructor:
      function RCadToolBarPanel() {
        

        // should be RCadToolBarPanel_BaseJs.call(this, engine):
        //RCadToolBarPanel.prototype = new RCadToolBarPanel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCadToolBarPanel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCadToolBarPanel);
            //}
          }
          else {
            qWarning("RCadToolBarPanel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RCadToolBarPanel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCadToolBarPanel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //RCadToolBarPanel.prototype = new RCadToolBarPanel_BaseJs(engine);
      //RCadToolBarPanel.prototype = new RCadToolBarPanel_Wrapper(engine);
      RCadToolBarPanel.prototype = new Object();

      RCadToolBarPanel.prototype.toString = function() {
          //return "RCadToolBarPanel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCadToolBarPanel [JS]";
        };
      RCadToolBarPanel.getObjectType = function() {
        return RJSType_RCadToolBarPanel.getIdStatic();
      };

      RCadToolBarPanel.prototype.getObjectType = function() {
        return RJSType_RCadToolBarPanel.getIdStatic();
      };

      RCadToolBarPanel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCadToolBarPanel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RWidget.getIdStatic()) {
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
      //RCadToolBarPanel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCadToolBarPanel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    