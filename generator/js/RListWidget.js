
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
      

      // functions:
      
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
    