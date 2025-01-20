
      // auto generated
      //var self;

      // class constructor:
      function RSnapFree() {
        

        // should be RSnapFree_BaseJs.call(this, engine):
        //RSnapFree.prototype = new RSnapFree_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapFree.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RSnapFree);
                
            //}
          }
          else {
            qWarning("RSnapFree.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapFree_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RSnapFree);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapFree);
  }

  
  else {
    
        print("RSnapFree(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RSnapFree.prototype = new RSnapFree_BaseJs(engine);
      //RSnapFree.prototype = new RSnapFree_Wrapper(engine);
      RSnapFree.prototype = new Object();

      RSnapFree.prototype.toString = function() {
          //return "RSnapFree [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapFree [JS]";
        };
      RSnapFree.getObjectType = function() {
        return RJSType_RSnapFree.getIdStatic();
      };

      RSnapFree.prototype.getObjectType = function() {
        return RJSType_RSnapFree.getIdStatic();
      };

      RSnapFree.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapFree.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapFree.Unknown = RSnapFree_Wrapper.Unknown;
RSnapFree.Free = RSnapFree_Wrapper.Free;
RSnapFree.Grid = RSnapFree_Wrapper.Grid;
RSnapFree.Endpoint = RSnapFree_Wrapper.Endpoint;
RSnapFree.OnEntity = RSnapFree_Wrapper.OnEntity;
RSnapFree.Center = RSnapFree_Wrapper.Center;
RSnapFree.Middle = RSnapFree_Wrapper.Middle;
RSnapFree.Distance = RSnapFree_Wrapper.Distance;
RSnapFree.Intersection = RSnapFree_Wrapper.Intersection;
RSnapFree.IntersectionManual = RSnapFree_Wrapper.IntersectionManual;
RSnapFree.Reference = RSnapFree_Wrapper.Reference;
RSnapFree.Perpendicular = RSnapFree_Wrapper.Perpendicular;
RSnapFree.Tangential = RSnapFree_Wrapper.Tangential;
RSnapFree.Coordinate = RSnapFree_Wrapper.Coordinate;
RSnapFree.CoordinatePolar = RSnapFree_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapFree.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapFree.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapFree);
  }

  
  else {
    
        print("RSnapFree.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapFree.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapFree.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapFree);
  }

  
  else {
    
        print("RSnapFree.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapFree.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapFree.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      