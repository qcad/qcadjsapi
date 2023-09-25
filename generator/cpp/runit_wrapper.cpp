
  // Auto generated
  
  // include header:
  //#include "RUnitwrapper.h"
  //#include "header_cpp.h"
  
    #include "runit_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RUnit
    // Function: formatLinear
    // Source: 
    // Static: true
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatLinear
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
  a8, 
  const QJSValue& 
  a9
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper_qcad::is_RS_LinearFormat(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

   && RJSHelper::is_bool(handler, a8
    , true
  
  )

   && RJSHelper::is_char(handler, a9
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: format (RS::LinearFormat)
  
RS::LinearFormat a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RS_LinearFormat(handler, a3);
        
  // convert js parameter to cpp: prec (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = true;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a8_cpp;

      
          if (a8.isUndefined()) {
            a8_cpp = false;
          }
          else {
            a8_cpp = RJSHelper::js2cpp_bool(handler, a8);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a9_cpp;

      
          if (a9.isUndefined()) {
            a9_cpp = RDEFAULT_DOT;
          }
          else {
            a9_cpp = RJSHelper::js2cpp_char(handler, a9);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatLinear(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatLinear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatScientific
    // Source: 
    // Static: true
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatScientific
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
  a7
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatScientific(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatScientific";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatDecimal
    // Source: 
    // Static: true
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatDecimal
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

   && RJSHelper::is_char(handler, a8
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a8_cpp;

      
          if (a8.isUndefined()) {
            a8_cpp = RDEFAULT_DOT;
          }
          else {
            a8_cpp = RJSHelper::js2cpp_char(handler, a8);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatDecimal(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatDecimal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatEngineering
    // Source: 
    // Static: true
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatEngineering
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
  a7
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatEngineering(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatEngineering";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatArchitectural
    // Source: 
    // Static: true
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatArchitectural
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
  a7
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatArchitectural(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatArchitectural";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatFractional
    // Source: 
    // Static: true
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatFractional
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
  a7
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper::is_bool(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showUnit (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = false;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_bool(handler, a7);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatFractional(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatFractional";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: formatAngle
    // Source: 
    // Static: true
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::formatAngle
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_AngleFormat(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_char(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: format (RS::AngleFormat)
  
RS::AngleFormat a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_AngleFormat(handler, a2);
        
  // convert js parameter to cpp: prec (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = true;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = RDEFAULT_DOT;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_char(handler, a6);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::formatAngle(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: isMetric
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::isMetric
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RUnit::isMetric(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMetric";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: convert
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::convert
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

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: source (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: dest (RS::Unit)
  
RS::Unit a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RUnit::convert(
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

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a2
  )

   && RJSHelper_qcad::is_RS_Unit(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: source (RS::Unit)
  
RS::Unit a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a2);
        
  // convert js parameter to cpp: dest (RS::Unit)
  
RS::Unit a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RVector res = 
                
                // call static member function:
                RUnit::convert(
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

                  qWarning() << "no matching function variant found for convert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: getFactorToM
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::getFactorToM
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RUnit::getFactorToM(
              a1_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFactorToM";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: parseUnit
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::parseUnit
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
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RS::Unit res = 
                
                // call static member function:
                RUnit::parseUnit(
              a1_cpp
    
            );
          
            // return type: RS::Unit

            return RJSHelper_qcad::cpp2js_RS_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parseUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: unitToSymbol
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::unitToSymbol
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        
  // convert js parameter to cpp: asText (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::unitToSymbol(
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

                  qWarning() << "no matching function variant found for unitToSymbol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: unitToName
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::unitToName
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        
  // convert js parameter to cpp: tr (bool)
  
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
            QString res = 
                
                // call static member function:
                RUnit::unitToName(
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

                  qWarning() << "no matching function variant found for unitToName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: getLabel
    // Source: 
    // Static: true
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::getLabel
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_char(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: precisionOverride (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_MIN1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: forceSuppressTrailingZeroes (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: onlyPreciseResult (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = RDEFAULT_DOT;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_char(handler, a6);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::getLabel(
              a1_cpp
    , *a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: doubleToString
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::doubleToString
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

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_char(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: prec (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RDEFAULT_DOT;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_char(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::doubleToString(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_char(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: prec (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RDEFAULT_DOT;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_char(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::doubleToString(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUnit
    // Function: doubleToStringDec
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RUnit_WrapperSingleton::doubleToStringDec
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

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_char(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: prec (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: showLeadingZeroes (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: showTrailingZeroes (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: decimalSeparator (char)
  
char a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RDEFAULT_DOT;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_char(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RUnit::doubleToStringDec(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleToStringDec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RUnit_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RUnit_Wrapper>("org.qcad", 1, 0, "RUnit_Wrapper");
        qmlRegisterInterface<RUnit_Wrapper>("RUnit_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RUnit* t = new RJSType_RUnit();
          global.setProperty("RJSType_RUnit", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RUnit::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RUnit_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RUnit_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RUnit_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RUnit_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RUnit_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RUnit_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RUnit_WrapperSingleton * s = new RUnit_WrapperSingleton(handler);
        engine->globalObject().setProperty("RUnit_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RUnit.js";
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
    RUnit_Wrapper::RUnit_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RUnit_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RUnit_Wrapper::RUnit_Wrapper(RJSApi& h, RUnit* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RUnit_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RUnit_Wrapper"));
              //setObjectName("RUnit_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RUnit_Wrapper::~RUnit_Wrapper() {
            //RDebug::decCounter(QString("RUnit_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RUnit_Wrapper"));

            //qDebug() << "RUnit_Wrapper::~RUnit_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RUnit";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RUnit_Wrapper::initConnections() {

          //setObjectName("RUnit_Wrapper");

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
  
    // Class: RUnit
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RUnit_Wrapper::RUnit_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RUnit_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RUnit_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RUnit(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RUnit";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  