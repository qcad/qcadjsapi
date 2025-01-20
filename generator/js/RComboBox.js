
      // auto generated
      //var self;

      // class constructor:
      function RComboBox() {
        

        // should be RComboBox_BaseJs.call(this, engine):
        //RComboBox.prototype = new RComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RComboBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RComboBox);
                
            //}
          }
          else {
            qWarning("RComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RComboBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RComboBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RComboBox);
  }

  
  else {
    
        print("RComboBox(): wrong number / type of arguments");
      
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
  
            }
          
        }

        

      }

      //RComboBox.prototype = new RComboBox_BaseJs(engine);
      //RComboBox.prototype = new RComboBox_Wrapper(engine);
      RComboBox.prototype = new Object();

      RComboBox.prototype.toString = function() {
          //return "RComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RComboBox [JS]";
        };
      RComboBox.getObjectType = function() {
        return RJSType_RComboBox.getIdStatic();
      };

      RComboBox.prototype.getObjectType = function() {
        return RJSType_RComboBox.getIdStatic();
      };

      RComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RComboBox.getIdStatic()) {
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
RComboBox.NoInsert = RComboBox_Wrapper.NoInsert;
RComboBox.InsertAtTop = RComboBox_Wrapper.InsertAtTop;
RComboBox.InsertAtCurrent = RComboBox_Wrapper.InsertAtCurrent;
RComboBox.InsertAtBottom = RComboBox_Wrapper.InsertAtBottom;
RComboBox.InsertAfterCurrent = RComboBox_Wrapper.InsertAfterCurrent;
RComboBox.InsertBeforeCurrent = RComboBox_Wrapper.InsertBeforeCurrent;
RComboBox.InsertAlphabetically = RComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RComboBox.AdjustToContents = RComboBox_Wrapper.AdjustToContents;
RComboBox.AdjustToContentsOnFirstShow = RComboBox_Wrapper.AdjustToContentsOnFirstShow;
RComboBox.AdjustToMinimumContentsLengthWithIcon = RComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      