
      // auto generated
      //var self;

      // class constructor:
      function RMathComboBox() {
        

        // should be RMathComboBox_BaseJs.call(this, engine):
        //RMathComboBox.prototype = new RMathComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMathComboBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RMathComboBox);
                
            //}
          }
          else {
            qWarning("RMathComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMathComboBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RMathComboBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMathComboBox);
  }

  
  else {
    
        print("RMathComboBox(): wrong number / type of arguments");
      
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
  
    this["valueChanged(double,QString)"] = Object.getPrototypeOf(this).valueChanged;
  
            }
          
        }

        

      }

      //RMathComboBox.prototype = new RMathComboBox_BaseJs(engine);
      //RMathComboBox.prototype = new RMathComboBox_Wrapper(engine);
      RMathComboBox.prototype = new Object();

      RMathComboBox.prototype.toString = function() {
          //return "RMathComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMathComboBox [JS]";
        };
      RMathComboBox.getObjectType = function() {
        return RJSType_RMathComboBox.getIdStatic();
      };

      RMathComboBox.prototype.getObjectType = function() {
        return RJSType_RMathComboBox.getIdStatic();
      };

      RMathComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMathComboBox.getIdStatic()) {
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
RMathComboBox.NoInsert = RMathComboBox_Wrapper.NoInsert;
RMathComboBox.InsertAtTop = RMathComboBox_Wrapper.InsertAtTop;
RMathComboBox.InsertAtCurrent = RMathComboBox_Wrapper.InsertAtCurrent;
RMathComboBox.InsertAtBottom = RMathComboBox_Wrapper.InsertAtBottom;
RMathComboBox.InsertAfterCurrent = RMathComboBox_Wrapper.InsertAfterCurrent;
RMathComboBox.InsertBeforeCurrent = RMathComboBox_Wrapper.InsertBeforeCurrent;
RMathComboBox.InsertAlphabetically = RMathComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RMathComboBox.AdjustToContents = RMathComboBox_Wrapper.AdjustToContents;
RMathComboBox.AdjustToContentsOnFirstShow = RMathComboBox_Wrapper.AdjustToContentsOnFirstShow;
RMathComboBox.AdjustToMinimumContentsLengthWithIcon = RMathComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMathComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMathComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      