
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
              copyProperties(this, wrapper, RSnapMiddle);
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
          

        copyProperties(this, wrapper, RSnapMiddle);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
                return this.showUiOptionsSuper(
                  
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
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapMiddle);
  }

  
  else {
    
        print("RSnapMiddle.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    