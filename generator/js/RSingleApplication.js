
      // auto generated
      //var self;

      // class constructor:
      function RSingleApplication() {
        

        // should be RSingleApplication_BaseJs.call(this, engine):
        //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSingleApplication.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSingleApplication);
            //}
          }
          else {
            qWarning("RSingleApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSingleApplication.js: No constructor found for class RSingleApplication");
            
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
            
    this["screenAdded(QScreen*)"] = Object.getPrototypeOf(this).screenAdded;
  
    this["screenRemoved(QScreen*)"] = Object.getPrototypeOf(this).screenRemoved;
  
    this["primaryScreenChanged(QScreen*)"] = Object.getPrototypeOf(this).primaryScreenChanged;
  
    this["focusObjectChanged(QObject*)"] = Object.getPrototypeOf(this).focusObjectChanged;
  
    this["applicationStateChanged(Qt::ApplicationState)"] = Object.getPrototypeOf(this).applicationStateChanged;
  
    this["layoutDirectionChanged(Qt::LayoutDirection)"] = Object.getPrototypeOf(this).layoutDirectionChanged;
  
    this["paletteChanged(QPalette)"] = Object.getPrototypeOf(this).paletteChanged;
  
    this["fontChanged(QFont)"] = Object.getPrototypeOf(this).fontChanged;
  
    this["focusChanged(QWidget*,QWidget*)"] = Object.getPrototypeOf(this).focusChanged;
  
    this["messageReceived(QString)"] = Object.getPrototypeOf(this).messageReceived;
  
    this["fileOpenRequestReceived(QString)"] = Object.getPrototypeOf(this).fileOpenRequestReceived;
  
          }
        }
      }

      //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);
      //RSingleApplication.prototype = new RSingleApplication_Wrapper(engine);
      RSingleApplication.prototype = new Object();

      RSingleApplication.prototype.toString = function() {
          //return "RSingleApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSingleApplication [JS]";
        };
      RSingleApplication.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSingleApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QCoreApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGuiApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QApplication.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RSingleApplication.getInstance = function() 
          
        {
          //print("JS: RSingleApplication.getInstance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.getInstance(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.getInstance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSingleApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSingleApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    