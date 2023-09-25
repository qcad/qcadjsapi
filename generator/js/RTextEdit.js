
      // auto generated
      //var self;

      // class constructor:
      function RTextEdit() {
        

        // should be RTextEdit_BaseJs.call(this, engine):
        //RTextEdit.prototype = new RTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextEdit.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextEdit);
            //}
          }
          else {
            qWarning("RTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit(): wrong number / type of arguments");
      
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

      //RTextEdit.prototype = new RTextEdit_BaseJs(engine);
      //RTextEdit.prototype = new RTextEdit_Wrapper(engine);
      RTextEdit.prototype = new Object();

      RTextEdit.prototype.toString = function() {
          //return "RTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextEdit [JS]";
        };
      RTextEdit.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextEdit.getIdStatic()) {
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
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextBrowser.getIdStatic()) {
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
      //RTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    