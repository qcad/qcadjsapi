
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
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
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
      
        // function 
        RCadToolBarPanel.prototype.actionEvent = function() 
          
        {
          //print("JS: RCadToolBarPanel.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RCadToolBarPanel.tr = function() 
          
        {
          //print("JS: RCadToolBarPanel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCadToolBarPanel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCadToolBarPanel.setTabOrder = function() 
          
        {
          //print("JS: RCadToolBarPanel.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCadToolBarPanel_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCadToolBarPanel.mouseGrabber = function() 
          
        {
          //print("JS: RCadToolBarPanel.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCadToolBarPanel_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCadToolBarPanel.keyboardGrabber = function() 
          
        {
          //print("JS: RCadToolBarPanel.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCadToolBarPanel_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    