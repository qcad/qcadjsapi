
      // auto generated
      //var self;

      // class constructor:
      function RColorCombo() {
        

        // should be RColorCombo_BaseJs.call(this, engine):
        //RColorCombo.prototype = new RColorCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RColorCombo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RColorCombo);
                
            //}
          }
          else {
            qWarning("RColorCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RColorCombo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RColorCombo);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo(): wrong number / type of arguments");
      
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
  
    this["editTextChanged(QString)"] = Object.getPrototypeOf(this).editTextChanged;
  
    this["activated(int)"] = Object.getPrototypeOf(this).activated;
  
    this["textActivated(QString)"] = Object.getPrototypeOf(this).textActivated;
  
    this["highlighted(int)"] = Object.getPrototypeOf(this).highlighted;
  
    this["textHighlighted(QString)"] = Object.getPrototypeOf(this).textHighlighted;
  
    this["currentIndexChanged(int)"] = Object.getPrototypeOf(this).currentIndexChanged;
  
    this["currentTextChanged(QString)"] = Object.getPrototypeOf(this).currentTextChanged;
  
    this["valueChanged(RColor)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["dialogRunning(bool)"] = Object.getPrototypeOf(this).dialogRunning;
  
            }
          
        }

        

      }

      //RColorCombo.prototype = new RColorCombo_BaseJs(engine);
      //RColorCombo.prototype = new RColorCombo_Wrapper(engine);
      RColorCombo.prototype = new Object();

      RColorCombo.prototype.toString = function() {
          //return "RColorCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RColorCombo [JS]";
        };
      RColorCombo.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RColorCombo.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
RColorCombo.NoInsert = RColorCombo_Wrapper.NoInsert;
RColorCombo.InsertAtTop = RColorCombo_Wrapper.InsertAtTop;
RColorCombo.InsertAtCurrent = RColorCombo_Wrapper.InsertAtCurrent;
RColorCombo.InsertAtBottom = RColorCombo_Wrapper.InsertAtBottom;
RColorCombo.InsertAfterCurrent = RColorCombo_Wrapper.InsertAfterCurrent;
RColorCombo.InsertBeforeCurrent = RColorCombo_Wrapper.InsertBeforeCurrent;
RColorCombo.InsertAlphabetically = RColorCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RColorCombo.AdjustToContents = RColorCombo_Wrapper.AdjustToContents;
RColorCombo.AdjustToContentsOnFirstShow = RColorCombo_Wrapper.AdjustToContentsOnFirstShow;
RColorCombo.AdjustToMinimumContentsLengthWithIcon = RColorCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RColorCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RColorCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      