
      // auto generated
      //var self;

      // class constructor:
      function RRefPoint() {
        

        // should be RRefPoint_BaseJs.call(this, engine):
        //RRefPoint.prototype = new RRefPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRefPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRefPoint);
            //}
          }
          else {
            qWarning("RRefPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint(): wrong number / type of arguments");
      
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

      //RRefPoint.prototype = new RRefPoint_BaseJs(engine);
      //RRefPoint.prototype = new RRefPoint_Wrapper(engine);
      RRefPoint.prototype = new Object();

      RRefPoint.prototype.toString = function() {
          //return "RRefPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRefPoint [JS]";
        };
      RRefPoint.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRefPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RVector.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RRefPoint.moveList = function() 
          
        {
          //print("JS: RRefPoint.moveList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.moveList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.moveList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.rotateList = function() 
          
        {
          //print("JS: RRefPoint.rotateList");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.rotateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.scaleList = function() 
          
        {
          //print("JS: RRefPoint.scaleList");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.scaleList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.containsFuzzy = function() 
          
        {
          //print("JS: RRefPoint.containsFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.containsFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.containsFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.findFirstFuzzy = function() 
          
        {
          //print("JS: RRefPoint.findFirstFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.findFirstFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.findFirstFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMinimum = function() 
          
        {
          //print("JS: RRefPoint.getMinimum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMinimum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMinimum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMinimum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMaximum = function() 
          
        {
          //print("JS: RRefPoint.getMaximum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMaximum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMaximum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMaximum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMinimumX = function() 
          
        {
          //print("JS: RRefPoint.getMinimumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMinimumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMinimumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMaximumX = function() 
          
        {
          //print("JS: RRefPoint.getMaximumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMaximumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMaximumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMinimumY = function() 
          
        {
          //print("JS: RRefPoint.getMinimumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMinimumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMinimumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getMaximumY = function() 
          
        {
          //print("JS: RRefPoint.getMaximumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getMaximumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getMaximumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getAverage = function() 
          
        {
          //print("JS: RRefPoint.getAverage");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getAverage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getAverage(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getAverage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getUnion = function() 
          
        {
          //print("JS: RRefPoint.getUnion");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getUnion(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getUnion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getUnique = function() 
          
        {
          //print("JS: RRefPoint.getUnique");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getUnique(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getUnique(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getXList = function() 
          
        {
          //print("JS: RRefPoint.getXList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getXList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getXList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getYList = function() 
          
        {
          //print("JS: RRefPoint.getYList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getYList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getYList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getZList = function() 
          
        {
          //print("JS: RRefPoint.getZList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getZList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getZList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getCrossProduct = function() 
          
        {
          //print("JS: RRefPoint.getCrossProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getCrossProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getCrossProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getDotProduct = function() 
          
        {
          //print("JS: RRefPoint.getDotProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getDotProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getDotProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.createPolar = function() 
          
        {
          //print("JS: RRefPoint.createPolar");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.createPolar(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.createPolar(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.lessThanX = function() 
          
        {
          //print("JS: RRefPoint.lessThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.lessThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.lessThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.greaterThanX = function() 
          
        {
          //print("JS: RRefPoint.greaterThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.greaterThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.greaterThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.lessThanY = function() 
          
        {
          //print("JS: RRefPoint.lessThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.lessThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.lessThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.greaterThanY = function() 
          
        {
          //print("JS: RRefPoint.greaterThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.greaterThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.greaterThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.lessThanEqualXY = function() 
          
        {
          //print("JS: RRefPoint.lessThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.lessThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.lessThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.greaterThanEqualXY = function() 
          
        {
          //print("JS: RRefPoint.greaterThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.greaterThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.greaterThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getSortedByDistance = function() 
          
        {
          //print("JS: RRefPoint.getSortedByDistance");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getSortedByDistance(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getSortedByDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getSortedLeftRightTopBottom = function() 
          
        {
          //print("JS: RRefPoint.getSortedLeftRightTopBottom");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getSortedLeftRightTopBottom(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getSortedLeftRightTopBottom(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.getSortedByAngle = function() 
          
        {
          //print("JS: RRefPoint.getSortedByAngle");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.getSortedByAngle(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.getSortedByAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.toVectorList = function() 
          
        {
          //print("JS: RRefPoint.toVectorList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toVectorList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toVectorList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.toRefPointList = function() 
          
        {
          //print("JS: RRefPoint.toRefPointList");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toRefPointList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toRefPointList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RRefPoint.invalid = 
  RRefPoint_WrapperSingletonInstance.invalid;
RRefPoint.nullVector = 
  RRefPoint_WrapperSingletonInstance.nullVector;
RRefPoint.nanVector = 
  RRefPoint_WrapperSingletonInstance.nanVector;


      // copy function:
      //RRefPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRefPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    