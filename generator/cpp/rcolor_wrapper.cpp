
  // Auto generated
  
  // include header:
  //#include "RColorwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcolor_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RColor*> RColor_Wrapper::basecasters_RColor;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RColor
    // Function: colorNames
    // Source: QColor
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::colorNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QColor::colorNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromRgb
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromRgb
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromRgb(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromRgbF
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromRgbF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: g (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: b (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromRgbF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromRgbF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromHsv
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromHsv
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: v (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsv(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromHsvF
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromHsvF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: v (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsvF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsvF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromCmyk
    // Source: QColor
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromCmyk
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: k (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 255;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_int(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromCmyk(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromCmykF
    // Source: QColor
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromCmykF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
  )

   && RJSHelper::is_float(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: m (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: y (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: k (float)
  
float a4_cpp;

      a4_cpp = RJSHelper::js2cpp_float(handler, a4);
        
  // convert js parameter to cpp: a (float)
  
float a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 1.0;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_float(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromCmykF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromCmykF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromHsl
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromHsl
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: l (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsl(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: fromHslF
    // Source: QColor
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::fromHslF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: l (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHslF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHslF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isValidColor
    // Source: QColor
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::isValidColor
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QColor::isValidColor(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValidColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: removeColor
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::removeColor
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
    
  // convert js parameter to cpp: cn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::removeColor(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: addColor
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::addColor
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

   && RJSHelper_qcad::is_RColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: c (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::addColor(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromCadIndex
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromCadIndex
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
    
  // convert js parameter to cpp: code (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadIndex(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: code (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadIndex(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromCadIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromCadCustom
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromCadCustom
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
    
  // convert js parameter to cpp: code (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadCustom(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: code (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadCustom(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromCadCustom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromName
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromName(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getNameList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getNameList
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: onlyFixed (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RColor::getNameList(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNameList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getColorList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getColorList
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: onlyFixed (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RColor> res = 
                
                // call static member function:
                RColor::getColorList(
              a1_cpp
    
            );
          
            // return type: QList<RColor>

            return RJSHelper_qcad::cpp2js_QList_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getIcon
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getIcon
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QSize(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: size (QSize)
  
QSize a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QSIZE_ICON;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSize(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                RColor::getIcon(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getHighlighted
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getHighlighted
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
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: bgColor (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        
  // convert js parameter to cpp: minDist (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 75;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::getHighlighted(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getFaded
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getFaded
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
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: bgColor (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        
  // convert js parameter to cpp: factor (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::getFaded(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFaded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: reinit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::reinit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::reinit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reinit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RColor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RColor_Wrapper>("org.qcad", 1, 0, "RColor_Wrapper");
        qmlRegisterInterface<RColor_Wrapper>("RColor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RColor* t = new RJSType_RColor();
          global.setProperty("RJSType_RColor", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RColor::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RColor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RColor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RColor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RColor_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RColor_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RColor_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RColor_WrapperSingleton * s = new RColor_WrapperSingleton(handler);
        engine->globalObject().setProperty("RColor_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RColor.js";
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
    RColor_Wrapper::RColor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RColor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RColor_Wrapper::RColor_Wrapper(RJSApi& h, RColor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RColor_Wrapper"));
              //setObjectName("RColor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RColor_Wrapper::~RColor_Wrapper() {
            //RDebug::decCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RColor_Wrapper"));

            //qDebug() << "RColor_Wrapper::~RColor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RColor";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RColor_Wrapper::initConnections() {

          //setObjectName("RColor_Wrapper");

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
  
    // Class: RColor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
RColor_Wrapper::RColor_Wrapper
                
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
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RColor_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

   && RJSHelper_qcad::is_RColor_Mode(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RColor::Fixed;
          }
          else {
            a5_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
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

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RColor_Mode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RColor::Fixed;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                a1_cpp
    , a2_cpp
    
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
        RJSHelper_qcad::is_RColor_Mode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                a1_cpp
    
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

        
            wrapped = new RColor(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RColor";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RColor
    // Function: name
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::name
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor_NameFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QColor::NameFormat)
  
QColor::NameFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QColor::HexRgb;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QColor_NameFormat(handler, a1);
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
                RColor* w = getWrapped();
                QString res = 
                    
                w->name(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setNamedColor
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setNamedColor
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setNamedColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNamedColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: spec
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::spec
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
                RColor* w = getWrapped();
                QColor::Spec res = 
                    
                w->spec(
                  
                );
              
            // return type: QColor::Spec

            return RJSHelper::cpp2js_QColor_Spec(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: alpha
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::alpha
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
                RColor* w = getWrapped();
                int res = 
                    
                w->alpha(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setAlpha
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setAlpha
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alpha (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setAlpha(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: alphaF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::alphaF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->alphaF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alphaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setAlphaF
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setAlphaF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alpha (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setAlphaF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlphaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: red
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::red
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
                RColor* w = getWrapped();
                int res = 
                    
                w->red(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for red";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: green
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::green
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
                RColor* w = getWrapped();
                int res = 
                    
                w->green(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for green";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: blue
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::blue
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
                RColor* w = getWrapped();
                int res = 
                    
                w->blue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setRed
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setRed
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: red (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setRed(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setGreen
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setGreen
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: green (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setGreen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setBlue
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setBlue
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blue (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setBlue(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: redF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::redF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->redF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for redF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: greenF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::greenF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->greenF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for greenF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: blueF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::blueF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->blueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setRedF
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setRedF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: red (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setRedF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRedF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setGreenF
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setGreenF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: green (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setGreenF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGreenF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setBlueF
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setBlueF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blue (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setBlueF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setRgb
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setRgb
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setRgb(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setRgbF
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setRgbF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: g (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: b (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setRgbF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRgbF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hue
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hue
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
                RColor* w = getWrapped();
                int res = 
                    
                w->hue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: saturation
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::saturation
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
                RColor* w = getWrapped();
                int res = 
                    
                w->saturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for saturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hsvHue
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hsvHue
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
                RColor* w = getWrapped();
                int res = 
                    
                w->hsvHue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvHue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hsvSaturation
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hsvSaturation
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
                RColor* w = getWrapped();
                int res = 
                    
                w->hsvSaturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvSaturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: value
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::value
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
                RColor* w = getWrapped();
                int res = 
                    
                w->value(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hueF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hueF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->hueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: saturationF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::saturationF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->saturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for saturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hsvHueF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hsvHueF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->hsvHueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvHueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hsvSaturationF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hsvSaturationF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->hsvSaturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvSaturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: valueF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::valueF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->valueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for valueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setHsv
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setHsv
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: v (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setHsv(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setHsvF
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setHsvF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: v (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setHsvF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsvF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: cyan
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::cyan
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
                RColor* w = getWrapped();
                int res = 
                    
                w->cyan(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cyan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: magenta
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::magenta
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
                RColor* w = getWrapped();
                int res = 
                    
                w->magenta(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for magenta";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: yellow
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::yellow
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
                RColor* w = getWrapped();
                int res = 
                    
                w->yellow(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for yellow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: black
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::black
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
                RColor* w = getWrapped();
                int res = 
                    
                w->black(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for black";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: cyanF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::cyanF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->cyanF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cyanF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: magentaF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::magentaF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->magentaF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for magentaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: yellowF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::yellowF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->yellowF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for yellowF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: blackF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::blackF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->blackF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blackF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setCmyk
    // Source: QColor
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setCmyk
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: k (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 255;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_int(handler, a5);
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
                RColor* w = getWrapped();
                
                w->setCmyk(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setCmykF
    // Source: QColor
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setCmykF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
  )

   && RJSHelper::is_float(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: m (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: y (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: k (float)
  
float a4_cpp;

      a4_cpp = RJSHelper::js2cpp_float(handler, a4);
        
  // convert js parameter to cpp: a (float)
  
float a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 1.0;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_float(handler, a5);
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
                RColor* w = getWrapped();
                
                w->setCmykF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCmykF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hslHue
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hslHue
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
                RColor* w = getWrapped();
                int res = 
                    
                w->hslHue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslHue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hslSaturation
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hslSaturation
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
                RColor* w = getWrapped();
                int res = 
                    
                w->hslSaturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslSaturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: lightness
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::lightness
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
                RColor* w = getWrapped();
                int res = 
                    
                w->lightness(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lightness";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hslHueF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hslHueF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->hslHueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslHueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: hslSaturationF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::hslSaturationF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->hslSaturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslSaturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: lightnessF
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::lightnessF
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
                RColor* w = getWrapped();
                float res = 
                    
                w->lightnessF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lightnessF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setHsl
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setHsl
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: l (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setHsl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setHslF
    // Source: QColor
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setHslF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: l (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                RColor* w = getWrapped();
                
                w->setHslF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHslF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toRgb
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toRgb
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toRgb(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toHsv
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toHsv
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toHsv(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toCmyk
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toCmyk
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toCmyk(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toHsl
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toHsl
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toHsl(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toExtendedRgb
    // Source: QColor
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toExtendedRgb
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toExtendedRgb(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toExtendedRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: convertTo
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::convertTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor_Spec(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: colorSpec (QColor::Spec)
  
QColor::Spec a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor_Spec(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                QColor res = 
                    
                w->convertTo(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for convertTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: lighter
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::lighter
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 150;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->lighter(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lighter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: darker
    // Source: QColor
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::darker
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 200;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->darker(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for darker";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getCustomColorCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getCustomColorCode
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
                RColor* w = getWrapped();
                int res = 
                    
                w->getCustomColorCode(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomColorCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getColorIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getColorIndex
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
                RColor* w = getWrapped();
                int res = 
                    
                w->getColorIndex(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isValid
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
                RColor* w = getWrapped();
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
            
    // Class: RColor
    // Function: getName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getName
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
                RColor* w = getWrapped();
                QString res = 
                    
                w->getName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isByLayer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isByLayer
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isByLayer(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isByLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isByBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isByBlock
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isByBlock(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isByBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isFixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isFixed
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isFixed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFixed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toCompat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toCompat
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toCompat(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCompat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setCompat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setCompat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: col (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setCompat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCompat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                bool res = 
                    
                w->operator==(
                  a1_cpp
    
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
