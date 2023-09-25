
      // auto generated
      //var self;

      // class constructor:
      function RArc() {
        

        // should be RArc_BaseJs.call(this, engine):
        //RArc.prototype = new RArc_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArc.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RArc);
            //}
          }
          else {
            qWarning("RArc.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc(): wrong number / type of arguments");
      
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

      //RArc.prototype = new RArc_BaseJs(engine);
      //RArc.prototype = new RArc_Wrapper(engine);
      RArc.prototype = new Object();

      RArc.prototype.toString = function() {
          //return "RArc [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArc [JS]";
        };
      RArc.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArc.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RArc.Unknown = RArc_Wrapper.Unknown;
RArc.Point = RArc_Wrapper.Point;
RArc.Line = RArc_Wrapper.Line;
RArc.Arc = RArc_Wrapper.Arc;
RArc.Circle = RArc_Wrapper.Circle;
RArc.Ellipse = RArc_Wrapper.Ellipse;
RArc.Polyline = RArc_Wrapper.Polyline;
RArc.Spline = RArc_Wrapper.Spline;
RArc.Triangle = RArc_Wrapper.Triangle;
RArc.XLine = RArc_Wrapper.XLine;
RArc.Ray = RArc_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RArc.isPointShape = function() 
          
        {
          //print("JS: RArc.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isLineShape = function() 
          
        {
          //print("JS: RArc.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isArcShape = function() 
          
        {
          //print("JS: RArc.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isCircleShape = function() 
          
        {
          //print("JS: RArc.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isEllipseShape = function() 
          
        {
          //print("JS: RArc.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isFullEllipseShape = function() 
          
        {
          //print("JS: RArc.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isPolylineShape = function() 
          
        {
          //print("JS: RArc.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isSplineShape = function() 
          
        {
          //print("JS: RArc.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isTriangleShape = function() 
          
        {
          //print("JS: RArc.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isXLineShape = function() 
          
        {
          //print("JS: RArc.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.isRayShape = function() 
          
        {
          //print("JS: RArc.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getOrderedShapes = function() 
          
        {
          //print("JS: RArc.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsES = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RArc.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getOffsetLines = function() 
          
        {
          //print("JS: RArc.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getOffsetArcs = function() 
          
        {
          //print("JS: RArc.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getReversedShapeList = function() 
          
        {
          //print("JS: RArc.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.trim = function() 
          
        {
          //print("JS: RArc.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.roundCorners = function() 
          
        {
          //print("JS: RArc.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.roundShapes = function() 
          
        {
          //print("JS: RArc.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.xLineToRay = function() 
          
        {
          //print("JS: RArc.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.rayToLine = function() 
          
        {
          //print("JS: RArc.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.scaleArc = function() 
          
        {
          //print("JS: RArc.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RArc.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.getErrorCode = function() 
          
        {
          //print("JS: RArc.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createFrom3Points = function() 
          
        {
          //print("JS: RArc.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createFrom2PBulge = function() 
          
        {
          //print("JS: RArc.createFrom2PBulge");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom2PBulge(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom2PBulge(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createTangential = function() 
          
        {
          //print("JS: RArc.createTangential");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createTangential(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createBiarc = function() 
          
        {
          //print("JS: RArc.createBiarc");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createBiarc(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createBiarc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RArc.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArc.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    