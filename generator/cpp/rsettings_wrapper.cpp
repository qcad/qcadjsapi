
  // Auto generated
  
  // include header:
  //#include "RSettingswrapper.h"
  //#include "header_cpp.h"
  
    #include "rsettings_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RSettings
    // Function: uninit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::uninit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::uninit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setNoWrite
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setNoWrite
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setNoWrite(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNoWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAppId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAppId
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getAppId(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAppId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDevicePixelRatio
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDevicePixelRatio
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getDevicePixelRatio(
              
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDevicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getLocale
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getLocale
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getLocale(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: loadTranslations
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::loadTranslations
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

   && RJSHelper::is_QStringList(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: module (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: dirs (QStringList)
  
QStringList a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QSTRINGLIST;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::loadTranslations(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for loadTranslations";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: translate
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::translate
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: context (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: str (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::translate(
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

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getOriginalArguments
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getOriginalArguments
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getOriginalArguments(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOriginalArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setOriginalArguments
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setOriginalArguments
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setOriginalArguments(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOriginalArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (QString)
  
QString a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_QSTRING;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getArguments
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getArguments
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getArguments(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getIntArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getIntArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getIntArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getIntListArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getIntListArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QList_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (QList<int>)
  
QList<int> a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_QLISTINT;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QList_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<int> res = 
                
                // call static member function:
                RSettings::getIntListArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntListArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getFloatArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getFloatArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_double(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (double)
  
double a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RNANDOUBLE;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_double(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getFloatArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFloatArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColorArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColorArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper_qcad::is_RColor(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (RColor)
  
RColor a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_RCOLOR;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getColorArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getVectorArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getVectorArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (RVector)
  
RVector a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RVector res = 
                
                // call static member function:
                RSettings::getVectorArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getBoxArgument
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getBoxArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper_qcad::is_RBox(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: def (RBox)
  
RBox a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_RBOX;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RBox res = 
                
                // call static member function:
                RSettings::getBoxArgument(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoxArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: testArgument
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::testArgument
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: args (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: shortFlag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: longFlag (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::testArgument(
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

                  qWarning() << "no matching function variant found for testArgument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isDeployed
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isDeployed
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isDeployed(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDeployed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getApplicationPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getApplicationPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getApplicationPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getApplicationPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPluginPaths
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPluginPaths
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getPluginPaths(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPluginPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPluginPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getPluginPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getThemePath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getThemePath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getThemePath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getThemePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getStandardLocation
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getStandardLocation
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
    
  // convert js parameter to cpp: sl (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getStandardLocation(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStandardLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getCacheLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getCacheLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getCacheLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCacheLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDataLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDataLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getDataLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDataLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getTempLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getTempLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getTempLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTempLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDesktopLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDesktopLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getDesktopLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDesktopLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDocumentsLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDocumentsLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getDocumentsLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocumentsLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getHomeLocation
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getHomeLocation
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getHomeLocation(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHomeLocation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isGuiEnabled
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isGuiEnabled
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isGuiEnabled(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isGuiEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isDebuggerEnabled
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isDebuggerEnabled
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isDebuggerEnabled(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDebuggerEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: hasQuitFlag
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::hasQuitFlag
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::hasQuitFlag(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasQuitFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setQuitFlag
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setQuitFlag
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setQuitFlag(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuitFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getFileName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getFileName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getFileName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getLaunchPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getLaunchPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getLaunchPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLaunchPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setLaunchPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setLaunchPath
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
    
  // convert js parameter to cpp: launchPath (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setLaunchPath(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLaunchPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setRulerFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setRulerFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setRulerFont(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRulerFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getRulerFont
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getRulerFont
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                RSettings::getRulerFont(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRulerFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setSnapLabelFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setSnapLabelFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setSnapLabelFont(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSnapLabelFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSnapLabelFont
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSnapLabelFont
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                RSettings::getSnapLabelFont(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSnapLabelFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getInfoLabelFont
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getInfoLabelFont
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                RSettings::getInfoLabelFont(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInfoLabelFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getStatusBarFont
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getStatusBarFont
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                RSettings::getStatusBarFont(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStatusBarFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSelectionColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSelectionColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getSelectionColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelectionColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getReferencePointColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getReferencePointColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getReferencePointColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePointColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getStartReferencePointColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getStartReferencePointColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getStartReferencePointColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStartReferencePointColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getEndReferencePointColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getEndReferencePointColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getEndReferencePointColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndReferencePointColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSecondaryReferencePointColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSecondaryReferencePointColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getSecondaryReferencePointColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSecondaryReferencePointColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getTertiaryReferencePointColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getTertiaryReferencePointColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getTertiaryReferencePointColor(
              
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTertiaryReferencePointColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getHighResolutionGraphicsView
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getHighResolutionGraphicsView
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getHighResolutionGraphicsView(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHighResolutionGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAutoScaleGrid
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAutoScaleGrid
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAutoScaleGrid(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoScaleGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAutoScaleMetaGrid
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAutoScaleMetaGrid
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAutoScaleMetaGrid(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoScaleMetaGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAutoScalePatterns
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAutoScalePatterns
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAutoScalePatterns(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoScalePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAutoZoomOnLoad
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAutoZoomOnLoad
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAutoZoomOnLoad(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoZoomOnLoad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColorCorrection
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColorCorrection
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getColorCorrection(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorCorrection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColorCorrectionDisableForPrinting
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColorCorrectionDisableForPrinting
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getColorCorrectionDisableForPrinting(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorCorrectionDisableForPrinting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColorThreshold
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColorThreshold
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getColorThreshold(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getFadingFactor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getFadingFactor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getFadingFactor(
              
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFadingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getTextHeightThreshold
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getTextHeightThreshold
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getTextHeightThreshold(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextHeightThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getArcAngleLengthThreshold
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getArcAngleLengthThreshold
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getArcAngleLengthThreshold(
              
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArcAngleLengthThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMinArcAngleStep
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMinArcAngleStep
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getMinArcAngleStep(
              
            );
          
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMinArcAngleStep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDashThreshold
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDashThreshold
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getDashThreshold(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDashThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getQtVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getQtVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getQtVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getQtVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getQtVersionString
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getQtVersionString
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getQtVersionString(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getQtVersionString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isQt
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isQt
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
    
  // convert js parameter to cpp: majorVersion (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isQt(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isQt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getCompilerVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getCompilerVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getCompilerVersion(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCompilerVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getOSVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getOSVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getOSVersion(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOSVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getReleaseDate
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getReleaseDate
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getReleaseDate(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReleaseDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getVersionString
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getVersionString
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getVersionString(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVersionString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getNumericalVersionString
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getNumericalVersionString
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getNumericalVersionString(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNumericalVersionString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMajorVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMajorVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getMajorVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMajorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMinorVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMinorVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getMinorVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMinorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getRevisionVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getRevisionVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getRevisionVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRevisionVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getBuildVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getBuildVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getBuildVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBuildVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getRevisionString
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getRevisionString
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getRevisionString(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRevisionString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setFirstStart
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setFirstStart
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setFirstStart(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFirstStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isFirstStart
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isFirstStart
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isFirstStart(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFirstStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setNewVersion
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setNewVersion
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setNewVersion(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNewVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isNewVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isNewVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isNewVersion(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNewVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setPreviousVersion
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setPreviousVersion
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
    
  // convert js parameter to cpp: pv (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setPreviousVersion(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPreviousVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getCurrentVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getCurrentVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getCurrentVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPreviousVersion
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPreviousVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getPreviousVersion(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPreviousVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isUpdated
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isUpdated
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: versionCheck (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = -1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::isUpdated(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpdated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSnapRange
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSnapRange
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getSnapRange(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSnapRange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPickRange
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPickRange
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getPickRange(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPickRange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getZeroWeightWeight
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getZeroWeightWeight
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getZeroWeightWeight(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getZeroWeightWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPreviewEntities
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPreviewEntities
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getPreviewEntities(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPreviewEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getLimitZoomAndScroll
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getLimitZoomAndScroll
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getLimitZoomAndScroll(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLimitZoomAndScroll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getShowCrosshair
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getShowCrosshair
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getShowCrosshair(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShowCrosshair";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setShowCrosshair
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setShowCrosshair
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setShowCrosshair(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShowCrosshair";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getShowLargeCrosshair
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getShowLargeCrosshair
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getShowLargeCrosshair(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShowLargeCrosshair";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setShowLargeCrosshair
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setShowLargeCrosshair
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setShowLargeCrosshair(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShowLargeCrosshair";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getShowLargeOriginAxis
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getShowLargeOriginAxis
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getShowLargeOriginAxis(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShowLargeOriginAxis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setShowLargeOriginAxis
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setShowLargeOriginAxis
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setShowLargeOriginAxis(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShowLargeOriginAxis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getConcurrentDrawing
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getConcurrentDrawing
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getConcurrentDrawing(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getConcurrentDrawing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setConcurrentDrawing
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setConcurrentDrawing
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setConcurrentDrawing(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setConcurrentDrawing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getNumberLocale
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getNumberLocale
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QLocale res = 
                
                // call static member function:
                RSettings::getNumberLocale(
              
            );
          
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNumberLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: initRecentFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::initRecentFiles
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::initRecentFiles(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initRecentFiles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: addRecentFile
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::addRecentFile
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
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::addRecentFile(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addRecentFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: removeRecentFile
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::removeRecentFile
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
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::removeRecentFile(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeRecentFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getRecentFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getRecentFiles
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getRecentFiles(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRecentFiles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: clearRecentFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::clearRecentFiles
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::clearRecentFiles(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearRecentFiles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColor
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColor
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (RColor)
  
RColor a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RCOLOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getColor(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: hasValue
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::hasValue
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
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::hasValue(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getValue
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

   && RJSHelper::is_QVariant(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QVariant)
  
QVariant a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QVARIANT;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QVariant res = 
                
                // call static member function:
                RSettings::getValue(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getColorValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getColorValue
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
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RSettings::getColorValue(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getBoolValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getBoolValue
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

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getBoolValue(
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

                  qWarning() << "no matching function variant found for getBoolValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDoubleValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDoubleValue
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

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            double res = 
                
                // call static member function:
                RSettings::getDoubleValue(
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

                  qWarning() << "no matching function variant found for getDoubleValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getIntValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getIntValue
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

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getIntValue(
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

                  qWarning() << "no matching function variant found for getIntValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getStringValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getStringValue
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getStringValue(
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

                  qWarning() << "no matching function variant found for getStringValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getStringListValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getStringListValue
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

   && RJSHelper::is_QStringList(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QStringList)
  
QStringList a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getStringListValue(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStringListValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getCharValue
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getCharValue
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

   && RJSHelper::is_QChar(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QChar)
  
QChar a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QChar(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QChar res = 
                
                // call static member function:
                RSettings::getCharValue(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCharValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setValue
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setValue
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: overwrite (bool)
  
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
            
                // call static member function:
                RSettings::setValue(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: removeValue
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::removeValue
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
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::removeValue(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setApplicationNameOverride
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setApplicationNameOverride
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
    
  // convert js parameter to cpp: n (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setApplicationNameOverride(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationNameOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getApplicationNameOverride
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getApplicationNameOverride
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getApplicationNameOverride(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getApplicationNameOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: hasApplicationNameOverride
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::hasApplicationNameOverride
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::hasApplicationNameOverride(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasApplicationNameOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAllKeys
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAllKeys
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
    
  // convert js parameter to cpp: group (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getAllKeys(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAllKeys";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getQSettings
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getQSettings
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSettings* res = 
                
                // call static member function:
                RSettings::getQSettings(
              
            );
          
            // return type: QSettings*

            return RJSHelper::cpp2js_QSettings(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getQSettings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: resetCache
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::resetCache
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::resetCache(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setXDataEnabled
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setXDataEnabled
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setXDataEnabled(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setXDataEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isXDataEnabled
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isXDataEnabled
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isXDataEnabled(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isXDataEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: setNextVersionEnabled
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::setNextVersionEnabled
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::setNextVersionEnabled(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNextVersionEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isNextVersionEnabled
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isNextVersionEnabled
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isNextVersionEnabled(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNextVersionEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAutoScaleLinetypePatterns
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAutoScaleLinetypePatterns
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAutoScaleLinetypePatterns(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoScaleLinetypePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getApplyLineweightToPoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getApplyLineweightToPoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getApplyLineweightToPoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getApplyLineweightToPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getUseSecondarySelectionColor
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getUseSecondarySelectionColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getUseSecondarySelectionColor(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUseSecondarySelectionColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getUseSolidLineSelection
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getUseSolidLineSelection
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getUseSolidLineSelection(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUseSolidLineSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMouseThreshold
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMouseThreshold
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getMouseThreshold(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMouseThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPositionByMousePress
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPositionByMousePress
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getPositionByMousePress(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPositionByMousePress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getAllowMouseMoveInterruptions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getAllowMouseMoveInterruptions
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getAllowMouseMoveInterruptions(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAllowMouseMoveInterruptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isTextRenderedAsText
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isTextRenderedAsText
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isTextRenderedAsText(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextRenderedAsText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isLayer0CompatibilityOn
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isLayer0CompatibilityOn
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isLayer0CompatibilityOn(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayer0CompatibilityOn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSelectBlockWithAttribute
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSelectBlockWithAttribute
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getSelectBlockWithAttribute(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelectBlockWithAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getHideAttributeWithBlock
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getHideAttributeWithBlock
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getHideAttributeWithBlock(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHideAttributeWithBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getImportRecomputedDimBlocks
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getImportRecomputedDimBlocks
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getImportRecomputedDimBlocks(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getImportRecomputedDimBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getIgnoreBlockReferencePoint
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getIgnoreBlockReferencePoint
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getIgnoreBlockReferencePoint(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIgnoreBlockReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getIgnoreAllReferencePoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getIgnoreAllReferencePoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getIgnoreAllReferencePoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIgnoreAllReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getReferencePointSize
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getReferencePointSize
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getReferencePointSize(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getReferencePointShape
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getReferencePointShape
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getReferencePointShape(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePointShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMaxReferencePointEntities
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMaxReferencePointEntities
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getMaxReferencePointEntities(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxReferencePointEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getMaxReferencePointEntitiesDisplay
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getMaxReferencePointEntitiesDisplay
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSettings::getMaxReferencePointEntitiesDisplay(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxReferencePointEntitiesDisplay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPropertyEditorShowOnRequest
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPropertyEditorShowOnRequest
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getPropertyEditorShowOnRequest(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyEditorShowOnRequest";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getSimpleTextAlignLeft
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getSimpleTextAlignLeft
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::getSimpleTextAlignLeft(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSimpleTextAlignLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPolarCoordinateSeparator
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPolarCoordinateSeparator
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getPolarCoordinateSeparator(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPolarCoordinateSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getCartesianCoordinateSeparator
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getCartesianCoordinateSeparator
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getCartesianCoordinateSeparator(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCartesianCoordinateSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getRelativeCoordinatePrefix
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getRelativeCoordinatePrefix
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getRelativeCoordinatePrefix(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRelativeCoordinatePrefix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: isDarkMode
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::isDarkMode
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::isDarkMode(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDarkMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: hasDarkGuiBackground
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::hasDarkGuiBackground
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::hasDarkGuiBackground(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasDarkGuiBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: hasCustomStyleSheet
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::hasCustomStyleSheet
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSettings::hasCustomStyleSheet(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCustomStyleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getPrinterNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getPrinterNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getPrinterNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPrinterNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getDefaultPrinterName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getDefaultPrinterName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RSettings::getDefaultPrinterName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefaultPrinterName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: appendOpenGLMessage
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::appendOpenGLMessage
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
    
  // convert js parameter to cpp: msg (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSettings::appendOpenGLMessage(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendOpenGLMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSettings
    // Function: getOpenGLMessages
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSettings_WrapperSingleton::getOpenGLMessages
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RSettings::getOpenGLMessages(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOpenGLMessages";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RSettings_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSettings_Wrapper>("org.qcad", 1, 0, "RSettings_Wrapper");
        qmlRegisterInterface<RSettings_Wrapper>("RSettings_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSettings* t = new RJSType_RSettings();
          global.setProperty("RJSType_RSettings", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSettings::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSettings_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSettings_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSettings_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSettings_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSettings_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSettings_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSettings_WrapperSingleton * s = new RSettings_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSettings_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSettings.js";
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
    RSettings_Wrapper::RSettings_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSettings_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSettings_Wrapper::RSettings_Wrapper(RJSApi& h, RSettings* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSettings_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSettings_Wrapper"));
              //setObjectName("RSettings_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSettings_Wrapper::~RSettings_Wrapper() {
            //RDebug::decCounter(QString("RSettings_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSettings_Wrapper"));

            //qDebug() << "RSettings_Wrapper::~RSettings_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RSettings";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSettings_Wrapper::initConnections() {

          //setObjectName("RSettings_Wrapper");

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
  
    // Class: RSettings
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSettings_Wrapper::RSettings_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSettings_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSettings_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RSettings(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSettings";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  