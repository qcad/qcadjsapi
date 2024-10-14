
      // auto generated
      //var self;

      // class constructor:
      function RTriangle() {
        

        // should be RTriangle_BaseJs.call(this, engine):
        //RTriangle.prototype = new RTriangle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTriangle.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTriangle);
            //}
          }
          else {
            qWarning("RTriangle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTriangle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTriangle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle(): wrong number / type of arguments");
      
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

      //RTriangle.prototype = new RTriangle_BaseJs(engine);
      //RTriangle.prototype = new RTriangle_Wrapper(engine);
      RTriangle.prototype = new Object();

      RTriangle.prototype.toString = function() {
          //return "RTriangle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTriangle [JS]";
        };
      RTriangle.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTriangle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExplodable.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTriangle.Unknown = RTriangle_Wrapper.Unknown;
RTriangle.Point = RTriangle_Wrapper.Point;
RTriangle.Line = RTriangle_Wrapper.Line;
RTriangle.Arc = RTriangle_Wrapper.Arc;
RTriangle.Circle = RTriangle_Wrapper.Circle;
RTriangle.Ellipse = RTriangle_Wrapper.Ellipse;
RTriangle.Polyline = RTriangle_Wrapper.Polyline;
RTriangle.Spline = RTriangle_Wrapper.Spline;
RTriangle.Triangle = RTriangle_Wrapper.Triangle;
RTriangle.XLine = RTriangle_Wrapper.XLine;
RTriangle.Ray = RTriangle_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RTriangle.isPointShape = function() 
          
        {
          //print("JS: RTriangle.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isLineShape = function() 
          
        {
          //print("JS: RTriangle.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isArcShape = function() 
          
        {
          //print("JS: RTriangle.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isCircleShape = function() 
          
        {
          //print("JS: RTriangle.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isEllipseShape = function() 
          
        {
          //print("JS: RTriangle.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isFullEllipseShape = function() 
          
        {
          //print("JS: RTriangle.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isPolylineShape = function() 
          
        {
          //print("JS: RTriangle.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isSplineShape = function() 
          
        {
          //print("JS: RTriangle.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isTriangleShape = function() 
          
        {
          //print("JS: RTriangle.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isXLineShape = function() 
          
        {
          //print("JS: RTriangle.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.isRayShape = function() 
          
        {
          //print("JS: RTriangle.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getPolylines = function() 
          
        {
          //print("JS: RTriangle.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getOrderedShapes = function() 
          
        {
          //print("JS: RTriangle.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsES = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RTriangle.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getOffsetLines = function() 
          
        {
          //print("JS: RTriangle.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getOffsetArcs = function() 
          
        {
          //print("JS: RTriangle.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getReversedShapeList = function() 
          
        {
          //print("JS: RTriangle.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.trim = function() 
          
        {
          //print("JS: RTriangle.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.roundCorners = function() 
          
        {
          //print("JS: RTriangle.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.roundShapes = function() 
          
        {
          //print("JS: RTriangle.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.xLineToRay = function() 
          
        {
          //print("JS: RTriangle.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.rayToLine = function() 
          
        {
          //print("JS: RTriangle.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.scaleArc = function() 
          
        {
          //print("JS: RTriangle.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RTriangle.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.getErrorCode = function() 
          
        {
          //print("JS: RTriangle.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTriangle.createArrow = function() 
          
        {
          //print("JS: RTriangle.createArrow");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.createArrow(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.createArrow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTriangle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTriangle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    