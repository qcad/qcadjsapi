
  // Auto generated
  
  // include header:
  //#include "RMathwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmath_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RMath*> RMath_Wrapper::basecasters_RMath;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RMath
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::init
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMath::init(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: uninit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::uninit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMath::uninit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: mround
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::mround
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RMath::mround(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mround";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: trunc
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::trunc
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::trunc(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trunc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: pow
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::pow
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

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::pow(
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

                  qWarning() << "no matching function variant found for pow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isNormal
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isNormal
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isNormal(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNormal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isNaN
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isNaN
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isNaN(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNaN";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isInf
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isInf
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isInf(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isSane
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isSane
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
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isSane(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSane";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: eval
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::eval
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: expression (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::eval(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for eval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getError
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getError
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RMath::getError(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: hasError
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::hasError
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::hasError(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: angleToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::angleToString
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
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RMath::angleToString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for angleToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: trimTrailingZeroes
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::trimTrailingZeroes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RMath::trimTrailingZeroes(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimTrailingZeroes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: rad2deg
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::rad2deg
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
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::rad2deg(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rad2deg";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: deg2rad
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::deg2rad
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
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::deg2rad(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deg2rad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: rad2gra
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::rad2gra
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
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::rad2gra(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rad2gra";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: gra2deg
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::gra2deg
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
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::gra2deg(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for gra2deg";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isBetween
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isBetween
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper::is_double(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: limit1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: limit2 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: inclusive (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
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
            bool res = 
                
                // call static member function:
                RMath::isBetween(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBetween";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getGcd
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getGcd
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: b (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RMath::getGcd(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGcd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isAngleBetween
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isAngleBetween
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

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a2 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: reversed (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isAngleBetween(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAngleBetween";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getNormalizedAngle
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getNormalizedAngle
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
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::getNormalizedAngle(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNormalizedAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getRelativeAngle
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getRelativeAngle
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

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: baseAngle (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::getRelativeAngle(
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

                  qWarning() << "no matching function variant found for getRelativeAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getAngleDifference
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getAngleDifference
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

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::getAngleDifference(
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

                  qWarning() << "no matching function variant found for getAngleDifference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getAngleDifference180
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getAngleDifference180
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

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::getAngleDifference180(
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

                  qWarning() << "no matching function variant found for getAngleDifference180";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: makeAngleReadable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::makeAngleReadable
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: readable (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::makeAngleReadable(
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

                  qWarning() << "no matching function variant found for makeAngleReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isAngleReadable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isAngleReadable
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

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: tolerance (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.01;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isAngleReadable(
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

                  qWarning() << "no matching function variant found for isAngleReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: isSameDirection
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::isSameDirection
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dir1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: dir2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: tol (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::AngleTolerance;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::isSameDirection(
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

                  qWarning() << "no matching function variant found for isSameDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: absmod
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::absmod
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: b (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RMath::absmod(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absmod";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: toFractionString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::toFractionString
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

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: maxDenominator (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RMath::toFractionString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFractionString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: toFraction
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::toFraction
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: maxDenominator (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: number (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: numerator (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: denominator (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMath::toFraction(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toFraction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: simplify
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::simplify
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: numerator (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: denominator (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: numeratorRes (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: denominatorRes (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMath::simplify(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for simplify";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: fuzzyCompare
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::fuzzyCompare
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: v2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::PointTolerance;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::fuzzyCompare(
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

                  qWarning() << "no matching function variant found for fuzzyCompare";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: fuzzyAngleCompare
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::fuzzyAngleCompare
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: v2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::AngleTolerance;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::fuzzyAngleCompare(
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

                  qWarning() << "no matching function variant found for fuzzyAngleCompare";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: containsFuzzy
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::containsFuzzy
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
        RJSHelper::is_QList_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: values (QList<double>)
  
QList<double> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_double(handler, a1);
        
  // convert js parameter to cpp: v (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: tol (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::PointTolerance;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMath::containsFuzzy(
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

                  qWarning() << "no matching function variant found for containsFuzzy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: parseScale
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::parseScale
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleString (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RMath::parseScale(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parseScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: parseCoordinate
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::parseCoordinate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: coordinateString (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: relativeZero (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RVector res = 
                
                // call static member function:
                RMath::parseCoordinate(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parseCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMath
    // Function: getMd5Hash
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMath_WrapperSingleton::getMd5Hash
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RMath::getMd5Hash(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMd5Hash";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMath_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMath_Wrapper>("org.qcad", 1, 0, "RMath_Wrapper");
        qmlRegisterInterface<RMath_Wrapper>("RMath_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMath* t = new RJSType_RMath();
          global.setProperty("RJSType_RMath", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMath::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMath_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMath_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMath_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMath_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMath_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMath_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMath_WrapperSingleton * s = new RMath_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMath_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMath.js";
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
    RMath_Wrapper::RMath_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMath_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMath_Wrapper::RMath_Wrapper(RJSApi& h, RMath* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMath_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMath_Wrapper"));
              //setObjectName("RMath_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMath_Wrapper::~RMath_Wrapper() {
            //RDebug::decCounter(QString("RMath_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMath_Wrapper"));

            //qDebug() << "RMath_Wrapper::~RMath_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RMath";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMath_Wrapper::initConnections() {

          //setObjectName("RMath_Wrapper");

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
  
    // Class: RMath
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RMath_Wrapper::RMath_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RMath_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMath_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RMath(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RMath";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rmath_wrapper.cpp"
  
