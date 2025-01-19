
      // auto generated
      //var self;

      // class constructor:
      function RAttributeDefinitionData() {
        

        // should be RAttributeDefinitionData_BaseJs.call(this, engine):
        //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeDefinitionData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAttributeDefinitionData);
            //}
          }
          else {
            qWarning("RAttributeDefinitionData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RAttributeDefinitionData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeDefinitionData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeDefinitionData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAttributeDefinitionData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeDefinitionData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeDefinitionData);
  }

  
  else {
    
        print("RAttributeDefinitionData(): wrong number / type of arguments");
      
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

      //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_BaseJs(engine);
      //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_Wrapper(engine);
      RAttributeDefinitionData.prototype = new Object();

      RAttributeDefinitionData.prototype.toString = function() {
          //return "RAttributeDefinitionData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeDefinitionData [JS]";
        };
      RAttributeDefinitionData.getObjectType = function() {
        return RJSType_RAttributeDefinitionData.getIdStatic();
      };

      RAttributeDefinitionData.prototype.getObjectType = function() {
        return RJSType_RAttributeDefinitionData.getIdStatic();
      };

      RAttributeDefinitionData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeDefinitionData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RTextBasedData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RAttributeDefinitionData.NoFlags = RAttributeDefinitionData_Wrapper.NoFlags;
RAttributeDefinitionData.Bold = RAttributeDefinitionData_Wrapper.Bold;
RAttributeDefinitionData.Italic = RAttributeDefinitionData_Wrapper.Italic;
RAttributeDefinitionData.Simple = RAttributeDefinitionData_Wrapper.Simple;
RAttributeDefinitionData.DimensionLabel = RAttributeDefinitionData_Wrapper.DimensionLabel;
RAttributeDefinitionData.Highlighted = RAttributeDefinitionData_Wrapper.Highlighted;
RAttributeDefinitionData.Backward = RAttributeDefinitionData_Wrapper.Backward;
RAttributeDefinitionData.UpsideDown = RAttributeDefinitionData_Wrapper.UpsideDown;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAttributeDefinitionData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeDefinitionData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    