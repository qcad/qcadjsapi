
      // auto generated
      //var self;

      // class constructor:
      function RCommandLine() {
        

        // should be RCommandLine_BaseJs.call(this, engine):
        //RCommandLine.prototype = new RCommandLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCommandLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCommandLine);
            //}
          }
          else {
            qWarning("RCommandLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RCommandLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCommandLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCommandLine);
  }

  
  else {
    
        print("RCommandLine(): wrong number / type of arguments");
      
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
  
    this["textChanged(QString)"] = Object.getPrototypeOf(this).textChanged;
  
    this["textEdited(QString)"] = Object.getPrototypeOf(this).textEdited;
  
    this["cursorPositionChanged(int,int)"] = Object.getPrototypeOf(this).cursorPositionChanged;
  
    this["commandConfirmed(QString)"] = Object.getPrototypeOf(this).commandConfirmed;
  
    this["completeCommand(QString)"] = Object.getPrototypeOf(this).completeCommand;
  
          }
        }
      }

      //RCommandLine.prototype = new RCommandLine_BaseJs(engine);
      //RCommandLine.prototype = new RCommandLine_Wrapper(engine);
      RCommandLine.prototype = new Object();

      RCommandLine.prototype.toString = function() {
          //return "RCommandLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCommandLine [JS]";
        };
      RCommandLine.getObjectType = function() {
        return RJSType_RCommandLine.getIdStatic();
      };

      RCommandLine.prototype.getObjectType = function() {
        return RJSType_RCommandLine.getIdStatic();
      };

      RCommandLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCommandLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLineEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ActionPosition
RCommandLine.LeadingPosition = RCommandLine_Wrapper.LeadingPosition;
RCommandLine.TrailingPosition = RCommandLine_Wrapper.TrailingPosition;

  // enum: EchoMode
RCommandLine.Normal = RCommandLine_Wrapper.Normal;
RCommandLine.NoEcho = RCommandLine_Wrapper.NoEcho;
RCommandLine.Password = RCommandLine_Wrapper.Password;
RCommandLine.PasswordEchoOnEdit = RCommandLine_Wrapper.PasswordEchoOnEdit;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCommandLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCommandLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    