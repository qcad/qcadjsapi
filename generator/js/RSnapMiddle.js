
      // auto generated
      //var self;

      // class constructor:
      function RSnapMiddle() {
        

        // should be RSnapMiddle_BaseJs.call(this, engine):
        //RSnapMiddle.prototype = new RSnapMiddle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapMiddle.getIdStatic()))) {

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
            qWarning("RSnapMiddle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapMiddle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapMiddle);
  }

  
  else {
    
        print("RSnapMiddle(): wrong number / type of arguments");
      
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

      //RSnapMiddle.prototype = new RSnapMiddle_BaseJs(engine);
      //RSnapMiddle.prototype = new RSnapMiddle_Wrapper(engine);
      RSnapMiddle.prototype = new Object();

      RSnapMiddle.prototype.toString = function() {
          //return "RSnapMiddle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapMiddle [JS]";
        };
      RSnapMiddle.getObjectType = function() {
        return RJSType_RSnapMiddle.getIdStatic();
      };

      RSnapMiddle.prototype.getObjectType = function() {
        return RJSType_RSnapMiddle.getIdStatic();
      };

      RSnapMiddle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapMiddle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSnapEntityBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapMiddle.Unknown = RSnapMiddle_Wrapper.Unknown;
RSnapMiddle.Free = RSnapMiddle_Wrapper.Free;
RSnapMiddle.Grid = RSnapMiddle_Wrapper.Grid;
RSnapMiddle.Endpoint = RSnapMiddle_Wrapper.Endpoint;
RSnapMiddle.OnEntity = RSnapMiddle_Wrapper.OnEntity;
RSnapMiddle.Center = RSnapMiddle_Wrapper.Center;
RSnapMiddle.Middle = RSnapMiddle_Wrapper.Middle;
RSnapMiddle.Distance = RSnapMiddle_Wrapper.Distance;
RSnapMiddle.Intersection = RSnapMiddle_Wrapper.Intersection;
RSnapMiddle.IntersectionManual = RSnapMiddle_Wrapper.IntersectionManual;
RSnapMiddle.Reference = RSnapMiddle_Wrapper.Reference;
RSnapMiddle.Perpendicular = RSnapMiddle_Wrapper.Perpendicular;
RSnapMiddle.Tangential = RSnapMiddle_Wrapper.Tangential;
RSnapMiddle.Coordinate = RSnapMiddle_Wrapper.Coordinate;
RSnapMiddle.CoordinatePolar = RSnapMiddle_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapMiddle.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapMiddle.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapMiddle);
  }

  
  else {
    
        print("RSnapMiddle.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapMiddle.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapMiddle.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapMiddle);
  }

  
  else {
    
        print("RSnapMiddle.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapMiddle.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapMiddle.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapMiddle.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapMiddle.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapMiddle.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapMiddle.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapMiddle.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapMiddle.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapMiddle.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapMiddle.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapMiddle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapMiddle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapMiddle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      