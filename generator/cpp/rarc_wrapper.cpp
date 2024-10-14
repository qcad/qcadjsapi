
  // Auto generated
  
  // include header:
  //#include "RArcwrapper.h"
  //#include "header_cpp.h"
  
    #include "rarc_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RArc*> RArc_Wrapper::basecasters_RArc;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RArc
    // Function: isPointShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isPointShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isPointShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPointShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isLineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isLineShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isLineShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLineShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isArcShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isArcShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isArcShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArcShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isCircleShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isCircleShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isCircleShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCircleShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isEllipseShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isEllipseShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isEllipseShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEllipseShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isFullEllipseShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isFullEllipseShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isFullEllipseShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFullEllipseShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isPolylineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isPolylineShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isPolylineShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPolylineShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isSplineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isSplineShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isSplineShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSplineShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isTriangleShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isTriangleShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isTriangleShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTriangleShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isXLineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isXLineShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isXLineShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isXLineShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isRayShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::isRayShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RShape::isRayShape(
              *a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRayShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPolylines
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getPolylines
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shapes (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RPolyline> res = 
                
                // call static member function:
                RShape::getPolylines(
              a1_cpp
    
            );
          
            // return type: QList<RPolyline>

            return RJSHelper_qcad::cpp2js_QList_RPolyline(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPolylines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getOrderedShapes
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getOrderedShapes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shapes (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::getOrderedShapes(
              a1_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOrderedShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLL
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLL
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RLine(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: line2 (RLine)
  
RLine a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a2);
        
  // convert js parameter to cpp: limited1 (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: limited2 (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLL(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RLine(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: line2 (RLine)
  
RLine a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLL(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLL";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLA
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLA
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RArc(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: arc2 (RArc)
  
RArc a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a2);
        
  // convert js parameter to cpp: limited1 (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: limited2 (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLA(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RArc(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: arc2 (RArc)
  
RArc a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLA(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLC
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLC
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RCircle(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: circle2 (RCircle)
  
RCircle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLC(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLE
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLE
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        
  // convert js parameter to cpp: limited1 (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: limited2 (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLE(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLE(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLE";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLT
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLT
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RTriangle(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: triangle2 (RTriangle)
  
RTriangle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTriangle(handler, a2);
        
  // convert js parameter to cpp: limited1 (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: limited2 (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLT(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RTriangle(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: triangle2 (RTriangle)
  
RTriangle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTriangle(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLT(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLT";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLS
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RSpline(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: spline2 (RSpline)
  
RSpline a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLS(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLS";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsLX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsLX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsLX(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsLX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAA
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAA
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_RArc(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: arc2 (RArc)
  
RArc a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAA(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAC
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAC
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_RCircle(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: circle2 (RCircle)
  
RCircle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAC(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAE
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAE
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAE(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAE";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAT
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAT
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_RTriangle(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: triangle2 (RTriangle)
  
RTriangle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTriangle(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAT(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAT";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAS
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_RSpline(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: spline2 (RSpline)
  
RSpline a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAS(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAS";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsAX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsAX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RArc(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arc1 (RArc)
  
RArc a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RArc(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsAX(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsAX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsCC
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsCC
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCircle(handler, a1
  )

   && RJSHelper_qcad::is_RCircle(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: circle1 (RCircle)
  
RCircle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a1);
        
  // convert js parameter to cpp: circle2 (RCircle)
  
RCircle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsCC(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsCC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsCE
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsCE
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCircle(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: circle1 (RCircle)
  
RCircle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsCE(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsCE";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsCS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsCS
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCircle(handler, a1
  )

   && RJSHelper_qcad::is_RSpline(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: circle1 (RCircle)
  
RCircle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a1);
        
  // convert js parameter to cpp: spline2 (RSpline)
  
RSpline a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsCS(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsCS";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsCX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsCX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCircle(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: circle1 (RCircle)
  
RCircle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCircle(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsCX(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsCX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsEE
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsEE
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse1 (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsEE(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

   && RJSHelper_qcad::is_REllipse(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse1 (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        
  // convert js parameter to cpp: ellipse2 (REllipse)
  
REllipse a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsEE(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsEE";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsES
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsES
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

   && RJSHelper_qcad::is_RSpline(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse1 (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        
  // convert js parameter to cpp: spline2 (RSpline)
  
RSpline a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsES(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsES";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsEX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsEX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse1 (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsEX(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsEX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsSX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsSX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSpline(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spline1 (RSpline)
  
RSpline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsSX(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsSX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsSS
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsSS
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSpline(handler, a1
  )

   && RJSHelper_qcad::is_RSpline(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_double(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spline1 (RSpline)
  
RSpline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a1);
        
  // convert js parameter to cpp: spline2 (RSpline)
  
RSpline a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpline(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: tolerance (double)
  
double a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RS::PointTolerance;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_double(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsSS(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsSS";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPointsXX
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getIntersectionPointsXX
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExplodable_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RExplodable_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: explodable1 (RExplodable)
  

          // non copyable:
          RExplodable*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a1);
        
  // convert js parameter to cpp: explodable2 (RExplodable)
  

          // non copyable:
          RExplodable*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RExplodable_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                RShape::getIntersectionPointsXX(
              *a1_cpp
    , *a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPointsXX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getOffsetLines
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getOffsetLines
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper_qcad::is_RS_Side(handler, a4
  )

   && RJSHelper_qcad::is_RVector(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: distance (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: number (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: side (RS::Side)
  
RS::Side a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RS_Side(handler, a4);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RVector::invalid;
          }
          else {
            a5_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::getOffsetLines(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffsetLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getOffsetArcs
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getOffsetArcs
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper_qcad::is_RS_Side(handler, a4
  )

   && RJSHelper_qcad::is_RVector(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: distance (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: number (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: side (RS::Side)
  
RS::Side a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RS_Side(handler, a4);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RVector::invalid;
          }
          else {
            a5_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::getOffsetArcs(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffsetArcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getReversedShapeList
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getReversedShapeList
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shapes (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::getReversedShapeList(
              a1_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReversedShapeList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: trim
    // Source: RShape
    // Static: true
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::trim
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RShape_ptr(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
  )

   && RJSHelper::is_bool(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimShape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: trimClickPos (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: limitingShape (RShape)
  

          // non copyable:
          RShape*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a3);
        
  // convert js parameter to cpp: limitingClickPos (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        
  // convert js parameter to cpp: trimBoth (bool)
  
bool a5_cpp;

      a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
        
  // convert js parameter to cpp: samePolyline (bool)
  
bool a6_cpp;

      a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::trim(
              *a1_cpp
    , a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trim";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: roundCorners
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::roundCorners
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shapes (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        
  // convert js parameter to cpp: radius (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::roundCorners(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for roundCorners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: roundShapes
    // Source: RShape
    // Static: true
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::roundShapes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RShape(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_QSharedPointer_RShape(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
  )

   && RJSHelper::is_bool(handler, a6
  )

   && RJSHelper::is_double(handler, a7
  )

   && RJSHelper_qcad::is_RVector(handler, a8
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape1 (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a1);
        
  // convert js parameter to cpp: clickPos1 (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: shape2 (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a3);
        
  // convert js parameter to cpp: clickPos2 (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        
  // convert js parameter to cpp: trim (bool)
  
bool a5_cpp;

      a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
        
  // convert js parameter to cpp: samePolyline (bool)
  
bool a6_cpp;

      a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
        
  // convert js parameter to cpp: radius (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: pos (RVector)
  
RVector a8_cpp;

      a8_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a8);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSharedPointer<RShape>> res = 
                
                // call static member function:
                RShape::roundShapes(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
            );
          
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for roundShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: xLineToRay
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::xLineToRay
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSharedPointer<RShape> res = 
                
                // call static member function:
                RShape::xLineToRay(
              a1_cpp
    
            );
          
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for xLineToRay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: rayToLine
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::rayToLine
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (QSharedPointer<RShape>)
  
QSharedPointer<RShape> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSharedPointer<RShape> res = 
                
                // call static member function:
                RShape::rayToLine(
              a1_cpp
    
            );
          
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rayToLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: scaleArc
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::scaleArc
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSharedPointer<RShape> res = 
                
                // call static member function:
                RShape::scaleArc(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaleArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: ellipseToArcCircleEllipse
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::ellipseToArcCircleEllipse
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REllipse(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ellipse (REllipse)
  
REllipse a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REllipse(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSharedPointer<RShape> res = 
                
                // call static member function:
                RShape::ellipseToArcCircleEllipse(
              a1_cpp
    
            );
          
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ellipseToArcCircleEllipse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getErrorCode
    // Source: RShape
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::getErrorCode
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RShape::getErrorCode(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getErrorCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: createFrom3Points
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::createFrom3Points
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: point (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: endPoint (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RArc res = 
                
                // call static member function:
                RArc::createFrom3Points(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RArc

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFrom3Points";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: createFrom2PBulge
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::createFrom2PBulge
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: endPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: bulge (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RArc res = 
                
                // call static member function:
                RArc::createFrom2PBulge(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RArc

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFrom2PBulge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: createTangential
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::createTangential
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: pos (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: direction (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: radius (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RArc res = 
                
                // call static member function:
                RArc::createTangential(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: RArc

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createTangential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: createBiarc
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RArc_WrapperSingleton::createBiarc
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: startDirection (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: endPoint (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        
  // convert js parameter to cpp: endDirection (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: secondTry (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RArc> res = 
                
                // call static member function:
                RArc::createBiarc(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QList<RArc>

            return RJSHelper_qcad::cpp2js_QList_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createBiarc";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_VERSION>=0x060000

#endif

    void RArc_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RArc_Wrapper>("org.qcad", 1, 0, "RArc_Wrapper");
        qmlRegisterInterface<RArc_Wrapper>("RArc_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RArc* t = new RJSType_RArc();
          global.setProperty("RJSType_RArc", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RArc::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RArc_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RArc_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RArc_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RArc_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RArc_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RArc_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RArc_WrapperSingleton * s = new RArc_WrapperSingleton(handler);
        engine->globalObject().setProperty("RArc_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RArc.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    RArc_Wrapper::RArc_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RArc_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RArc_Wrapper::RArc_Wrapper(RJSApi& h, RArc* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RArc_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RArc_Wrapper"));
              //setObjectName("RArc_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          
        // special constructor to wrap existing object from shared pointer:
        RArc_Wrapper::RArc_Wrapper(RJSApi& h, QSharedPointer<RArc> o) : RJSWrapperObj(h), wrapped(nullptr), spWrapped(o), wrappedCreated(false) {
              //RDebug::incCounter(QString("RArc_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RArc_Wrapper"));
              //setObjectName("RArc_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RArc_Wrapper::~RArc_Wrapper() {
            //RDebug::decCounter(QString("RArc_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RArc_Wrapper"));

            //qDebug() << "RArc_Wrapper::~RArc_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RArc";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RArc_Wrapper::initConnections() {

          //setObjectName("RArc_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: RArc
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1
RArc_Wrapper::RArc_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RArc_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RArc_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cx (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: cy (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: radius (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: startAngle (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: endAngle (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: reversed (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RArc(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: radius (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: startAngle (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: endAngle (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: reversed (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RArc(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RArc(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
   && a5.isUndefined()
   && a6.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RArc";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_VERSION>=0x060000

#endif


    // non-static functions:
    
    // Class: RArc
    // Function: cloneToSharedPointer
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::cloneToSharedPointer
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->cloneToSharedPointer(
                  
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cloneToSharedPointer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isInterpolated
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isInterpolated
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isInterpolated(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInterpolated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getClosestPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getClosestPointOnShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getClosestPointOnShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestPointOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: to2D
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::to2D
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: equals
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::equals
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: tolerance (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::PointTolerance;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->equals(
                  *a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for equals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getIntProperties
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<int> res = 
                    
                w->getIntProperties(
                  
                );
              
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDistanceTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getMaxDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getMaxDistanceTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: points (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getMaxDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxDistanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isOnShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_TOLERANCE_1E_MIN4;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isOnShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: filterOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::filterOnShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointList (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_TOLERANCE_1E_MIN4;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->filterOnShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for filterOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getVectorFromEndpointTo
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getVectorFromEndpointTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getVectorFromEndpointTo(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorFromEndpointTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointOnShape
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getPointOnShape(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointWithDistanceToStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointWithDistanceToStart
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getPointWithDistanceToStart(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointWithDistanceToStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointWithDistanceToEnd
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointWithDistanceToEnd
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getPointWithDistanceToEnd(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointWithDistanceToEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getAngleAtPoint
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getAngleAtPoint
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getAngleAtPoint(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleAtPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointAtPercent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getPointAtPercent(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getAngleAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getAngleAtPercent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getAngleAtPercent(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: intersectsWith
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::intersectsWith
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->intersectsWith(
                  *a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersectsWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getIntersectionPoints
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RShape_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape1 (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: shape2 (RShape)
  

          // non copyable:
          RShape*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: force (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , *a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: force (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getSelfIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getSelfIntersectionPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tolerance (double)
  
double a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::PointTolerance;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_double(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getSelfIntersectionPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelfIntersectionPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDistancesFromStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDistancesFromStart
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<double> res = 
                    
                w->getDistancesFromStart(
                  a1_cpp
    
                );
              
            // return type: QList<double>

            return RJSHelper::cpp2js_QList_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistancesFromStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: flipHorizontal
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::flipHorizontal
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->flipHorizontal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipHorizontal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: flipVertical
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::flipVertical
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->flipVertical(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipVertical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: dump
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::dump
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->dump(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dump";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getShapeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getShapeType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RShape::Type res = 
                    
                w->getShapeType(
                  
                );
              
            // return type: RShape::Type

            return RJSHelper_qcad::cpp2js_RShape_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapeType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::clone
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RArc* res = 
                    
                w->clone(
                  
                );
              
            // return type: RArc*

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper_qcad::cpp2js_RArc:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isDirected
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isDirected
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isDirected(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDirected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setZ
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setZ
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: z (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setZ(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setZ";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getVectorProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getVectorProperties
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getVectorProperties(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDoubleProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDoubleProperties
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<double> res = 
                    
                w->getDoubleProperties(
                  
                );
              
            // return type: QList<double>

            return RJSHelper::cpp2js_QList_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDoubleProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getBoolProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getBoolProperties
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<bool> res = 
                    
                w->getBoolProperties(
                  
                );
              
            // return type: QList<bool>

            return RJSHelper::cpp2js_QList_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoolProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isFullCircle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isFullCircle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tolerance (double)
  
double a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::AngleTolerance;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_double(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isFullCircle(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFullCircle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getBoundingBox
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getEndPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getEndPoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getEndPoints(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getMiddlePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getMiddlePoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getMiddlePoints(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getCenterPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getCenterPoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getCenterPoints(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenterPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getArcReferencePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getArcReferencePoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getArcReferencePoints(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArcReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointsWithDistanceToEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointsWithDistanceToEnd
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: from (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::FromAny;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointsWithDistanceToEnd(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointsWithDistanceToEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointCloud
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointCloud
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: segmentLength (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointCloud(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointCloud";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getVectorTo
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getVectorTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getVectorTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getCenter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getCenter
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getCenter(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: vector (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getRadius
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getRadius(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setRadius
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: radius (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setRadius(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getStartAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getStartAngle
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getStartAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStartAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setStartAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setStartAngle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startAngle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setStartAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getEndAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getEndAngle
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getEndAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setEndAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setEndAngle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: endAngle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setEndAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEndAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isReversed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isReversed
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isReversed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isReversed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setReversed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setReversed
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: reversed (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setReversed(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setReversed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getAngleLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getAngleLength
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: allowForZeroLength (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getAngleLength(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: isAngleWithinArc
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::isAngleWithinArc
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->isAngleWithinArc(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAngleWithinArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDiameter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDiameter
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getDiameter(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDiameter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setDiameter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setDiameter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setDiameter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDiameter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setLength
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setLength(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getArea
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getArea
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getArea(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArea";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setArea
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setArea
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setArea(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArea";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getChordArea
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getChordArea
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getChordArea(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getChordArea";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDirection1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDirection1
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getDirection1(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDirection1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDirection2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDirection2
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getDirection2(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDirection2";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getSideOfPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getSideOfPoint
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RS::Side res = 
                    
                w->getSideOfPoint(
                  a1_cpp
    
                );
              
            // return type: RS::Side

            return RJSHelper_qcad::cpp2js_RS_Side(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSideOfPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getSweep
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getSweep
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getSweep(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSweep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: setSweep
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::setSweep
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->setSweep(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSweep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getLength
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getLength(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getStartPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getStartPoint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getStartPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getEndPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getEndPoint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getEndPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getPointAtAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getPointAtAngle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getPointAtAngle(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointAtAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getAngleAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getAngleAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_From(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: from (RS::From)
  
RS::From a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::FromStart;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RS_From(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getAngleAt(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getMiddlePoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getMiddlePoint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RVector res = 
                    
                w->getMiddlePoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: moveStartPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::moveStartPoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: keepRadius (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->moveStartPoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: moveEndPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::moveEndPoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: keepRadius (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->moveEndPoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: moveMiddlePoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::moveMiddlePoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                
                w->moveMiddlePoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveMiddlePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getBulge
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getBulge
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getBulge(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBulge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::move
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->move(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::rotate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rotation (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->rotate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::scale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::mirror
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: axis (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->mirror(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mirror";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: reverse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::reverse
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->reverse(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for reverse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: stretch
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::stretch
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPolyline(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: area (RPolyline)
  
RPolyline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPolyline(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->stretch(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getTransformed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getTransformed
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transform (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->getTransformed(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransformed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getTrimEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getTrimEnd
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RS::Ending res = 
                    
                w->getTrimEnd(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RS::Ending

            return RJSHelper_qcad::cpp2js_RS_Ending(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTrimEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: trimStartPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::trimStartPoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::invalid;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        
  // convert js parameter to cpp: extend (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->trimStartPoint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimDist (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->trimStartPoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: trimEndPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::trimEndPoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::invalid;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        
  // convert js parameter to cpp: extend (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->trimEndPoint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimDist (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                bool res = 
                    
                w->trimEndPoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getDistanceFromStart
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getDistanceFromStart
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                double res = 
                    
                w->getDistanceFromStart(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistanceFromStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: approximateWithLines
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::approximateWithLines
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: segmentLength (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: angle (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RPolyline res = 
                    
                w->approximateWithLines(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RPolyline

            return RJSHelper_qcad::cpp2js_RPolyline(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for approximateWithLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: approximateWithLinesTan
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::approximateWithLinesTan
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: segmentLength (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: angle (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RPolyline res = 
                    
                w->approximateWithLinesTan(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RPolyline

            return RJSHelper_qcad::cpp2js_RPolyline(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for approximateWithLinesTan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getTangents
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getTangents
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RLine> res = 
                    
                w->getTangents(
                  a1_cpp
    
                );
              
            // return type: QList<RLine>

            return RJSHelper_qcad::cpp2js_QList_RLine(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTangents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: getOffsetShapes
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::getOffsetShapes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper_qcad::is_RS_Side(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: number (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: side (RS::Side)
  
RS::Side a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RS_Side(handler, a3);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RVector::invalid;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->getOffsetShapes(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffsetShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: splitAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::splitAt
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: points (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->splitAt(
                  a1_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for splitAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RArc
    // Function: splitAtQuadrantLines
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::splitAtQuadrantLines
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                QList<RArc> res = 
                    
                w->splitAtQuadrantLines(
                  
                );
              
            // return type: QList<RArc>

            return RJSHelper_qcad::cpp2js_QList_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for splitAtQuadrantLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_VERSION>=0x060000

    // Class: RArc
    // Function: copy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RArc_Wrapper::copy
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RArc* w = getWrapped();
                RArc res = 
                    
                w->copy(
                  
                );
              
            // return type: RArc

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copy";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
