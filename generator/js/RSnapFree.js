
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
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
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapFree);
  }

  
  else {
    
        print("RSnapFree.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapFree.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapFree.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapFree.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapFree.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapFree.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapFree.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapFree.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapFree.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapFree.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapFree.prototype.snap");
          return this.__PROXY__.snap(...args);
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

      RSnapFree.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      