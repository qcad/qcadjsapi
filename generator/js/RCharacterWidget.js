
      // auto generated
      //var self;

      // class constructor:
      function RCharacterWidget() {
        

        // should be RCharacterWidget_BaseJs.call(this, engine):
        //RCharacterWidget.prototype = new RCharacterWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCharacterWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCharacterWidget);
            //}
          }
          else {
            qWarning("RCharacterWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RCharacterWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCharacterWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCharacterWidget);
  }

  
  else {
    
        print("RCharacterWidget(): wrong number / type of arguments");
      
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
  
    this["characterSelected(QString)"] = Object.getPrototypeOf(this).characterSelected;
  
          }
        }
      }

      //RCharacterWidget.prototype = new RCharacterWidget_BaseJs(engine);
      //RCharacterWidget.prototype = new RCharacterWidget_Wrapper(engine);
      RCharacterWidget.prototype = new Object();

      RCharacterWidget.prototype.toString = function() {
          //return "RCharacterWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCharacterWidget [JS]";
        };
      RCharacterWidget.getObjectType = function() {
        return RJSType_RCharacterWidget.getIdStatic();
      };

      RCharacterWidget.prototype.getObjectType = function() {
        return RJSType_RCharacterWidget.getIdStatic();
      };

      RCharacterWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCharacterWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RCharacterWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: RCharacterWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCharacterWidget);
  }

  
  else {
    
        print("RCharacterWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCharacterWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCharacterWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    