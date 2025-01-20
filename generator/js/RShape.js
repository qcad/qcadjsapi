
      // auto generated
      //var self;

      // class constructor:
      function RShape() {
        

        // should be RShape_BaseJs.call(this, engine):
        //RShape.prototype = new RShape_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RShape.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RShape);
                
            //}
          }
          else {
            qWarning("RShape.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RShape.js: No constructor found for class RShape");
            
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

      //RShape.prototype = new RShape_BaseJs(engine);
      //RShape.prototype = new RShape_Wrapper(engine);
      RShape.prototype = new Object();

      RShape.prototype.toString = function() {
          //return "RShape [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RShape [JS]";
        };
      RShape.getObjectType = function() {
        return RJSType_RShape.getIdStatic();
      };

      RShape.prototype.getObjectType = function() {
        return RJSType_RShape.getIdStatic();
      };

      RShape.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RShape.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RShape.Unknown = RShape_Wrapper.Unknown;
RShape.Point = RShape_Wrapper.Point;
RShape.Line = RShape_Wrapper.Line;
RShape.Arc = RShape_Wrapper.Arc;
RShape.Circle = RShape_Wrapper.Circle;
RShape.Ellipse = RShape_Wrapper.Ellipse;
RShape.Polyline = RShape_Wrapper.Polyline;
RShape.Spline = RShape_Wrapper.Spline;
RShape.Triangle = RShape_Wrapper.Triangle;
RShape.XLine = RShape_Wrapper.XLine;
RShape.Ray = RShape_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RShape.isPointShape = function() 
          
        {
          //print("JS: RShape.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isLineShape = function() 
          
        {
          //print("JS: RShape.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isArcShape = function() 
          
        {
          //print("JS: RShape.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isCircleShape = function() 
          
        {
          //print("JS: RShape.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isEllipseShape = function() 
          
        {
          //print("JS: RShape.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isFullEllipseShape = function() 
          
        {
          //print("JS: RShape.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isPolylineShape = function() 
          
        {
          //print("JS: RShape.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isSplineShape = function() 
          
        {
          //print("JS: RShape.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isTriangleShape = function() 
          
        {
          //print("JS: RShape.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isXLineShape = function() 
          
        {
          //print("JS: RShape.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isRayShape = function() 
          
        {
          //print("JS: RShape.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getPolylines = function() 
          
        {
          //print("JS: RShape.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOrderedShapes = function() 
          
        {
          //print("JS: RShape.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsES = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOffsetLines = function() 
          
        {
          //print("JS: RShape.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOffsetArcs = function() 
          
        {
          //print("JS: RShape.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getReversedShapeList = function() 
          
        {
          //print("JS: RShape.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.trim = function() 
          
        {
          //print("JS: RShape.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.roundCorners = function() 
          
        {
          //print("JS: RShape.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.roundShapes = function() 
          
        {
          //print("JS: RShape.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.xLineToRay = function() 
          
        {
          //print("JS: RShape.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.rayToLine = function() 
          
        {
          //print("JS: RShape.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.scaleArc = function() 
          
        {
          //print("JS: RShape.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RShape.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getErrorCode = function() 
          
        {
          //print("JS: RShape.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RShape.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RShape.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      