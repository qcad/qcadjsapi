
  // Auto generated
  
  // include header:
  //#include "RSwrapper.h"
  //#include "header_cpp.h"
  
    #include "rs_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RS*> RS_Wrapper::basecasters_RS;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RS
    // Function: compare
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::compare
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
        RJSHelper::is_QVariant(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v1 (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        
  // convert js parameter to cpp: v2 (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: noTolerance (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RS::compare(
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
        RJSHelper_qcad::is_QPair_QVariant_RPropertyAttributes(handler, a1
  )

   && RJSHelper_qcad::is_QPair_QVariant_RPropertyAttributes(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (QPair<QVariant,RPropertyAttributes>)
  
QPair<QVariant,RPropertyAttributes> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QPair_QVariant_RPropertyAttributes(handler, a1);
        
  // convert js parameter to cpp: p2 (QPair<QVariant,RPropertyAttributes>)
  
QPair<QVariant,RPropertyAttributes> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QPair_QVariant_RPropertyAttributes(handler, a2);
        
  // convert js parameter to cpp: noTolerance (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RS::compare(
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

                  qWarning() << "no matching function variant found for compare";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getCpuCores
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getCpuCores
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RS::getCpuCores(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCpuCores";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getIdealThreadCount
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getIdealThreadCount
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RS::getIdealThreadCount(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIdealThreadCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getBuildCpuArchitecture
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getBuildCpuArchitecture
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::getBuildCpuArchitecture(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBuildCpuArchitecture";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getHostId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getHostId
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::getHostId(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHostId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getSystemId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getSystemId
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::getSystemId(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSystemId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getWindowManagerId
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getWindowManagerId
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::getWindowManagerId(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWindowManagerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: showInFileManager
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::showInFileManager
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
    
  // convert js parameter to cpp: filePaths (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RS::showInFileManager(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showInFileManager";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getDirectoryList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getDirectoryList
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
    
  // convert js parameter to cpp: subDirectory (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::getDirectoryList(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDirectoryList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getFileList
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getFileList
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
    
  // convert js parameter to cpp: subDirectory (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fileExtension (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::getFileList(
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

                  qWarning() << "no matching function variant found for getFileList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getFontList
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getFontList
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::getFontList(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFontList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getPatternList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getPatternList
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
    
  // convert js parameter to cpp: metric (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::getPatternList(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPatternList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getLinetypeList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getLinetypeList
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
    
  // convert js parameter to cpp: metric (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::getLinetypeList(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: sortAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::sortAlphanumerical
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
    
  // convert js parameter to cpp: list (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RS::sortAlphanumerical(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortAlphanumerical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: compareChunkify
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::compareChunkify
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
            QStringList res = 
                
                // call static member function:
                RS::compareChunkify(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for compareChunkify";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: compareAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::compareAlphanumerical
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
    
  // convert js parameter to cpp: s1 (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: s2 (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RS::compareAlphanumerical(
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

                  qWarning() << "no matching function variant found for compareAlphanumerical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: lessThanAlphanumerical
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::lessThanAlphanumerical
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
    
  // convert js parameter to cpp: s1 (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: s2 (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RS::lessThanAlphanumerical(
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

                  qWarning() << "no matching function variant found for lessThanAlphanumerical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getFontFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getFontFamily
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCharFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextCharFormat)
  
QTextCharFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::getFontFamily(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFontFamily";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getPageSizeId
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getPageSizeId
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
            int res = 
                
                // call static member function:
                RS::getPageSizeId(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPageSizeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getPageSize
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getPageSize
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
            QSizeF res = 
                
                // call static member function:
                RS::getPageSize(
              a1_cpp
    
            );
          
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: setUtf8Codec
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::setUtf8Codec
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextStream_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ts (QTextStream)
  

          // non copyable:
          QTextStream*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextStream_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RS::setUtf8Codec(
              *a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUtf8Codec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: escape
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::escape
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
    
  // convert js parameter to cpp: plain (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::escape(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for escape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getScreenCount
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getScreenCount
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RS::getScreenCount(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getScreenCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: getAvailableGeometry
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::getAvailableGeometry
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
    
  // convert js parameter to cpp: screen (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSize res = 
                
                // call static member function:
                RS::getAvailableGeometry(
              a1_cpp
    
            );
          
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAvailableGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RS
    // Function: convert
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RS_WrapperSingleton::convert
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: codecName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RS::convert(
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

                  qWarning() << "no matching function variant found for convert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RS_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RS_Wrapper>("org.qcad", 1, 0, "RS_Wrapper");
        qmlRegisterInterface<RS_Wrapper>("RS_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RS* t = new RJSType_RS();
          global.setProperty("RJSType_RS", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RS::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RS_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RS_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RS_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RS_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RS_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RS_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RS_WrapperSingleton * s = new RS_WrapperSingleton(handler);
        engine->globalObject().setProperty("RS_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RS.js";
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
    RS_Wrapper::RS_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RS_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RS_Wrapper::RS_Wrapper(RJSApi& h, RS* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RS_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RS_Wrapper"));
              //setObjectName("RS_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RS_Wrapper::~RS_Wrapper() {
            //RDebug::decCounter(QString("RS_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RS_Wrapper"));

            //qDebug() << "RS_Wrapper::~RS_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RS";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void RS_Wrapper::initConnections() {

          //setObjectName("RS_Wrapper");

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
  
    // Class: RS
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RS_Wrapper::RS_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RS_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RS_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RS(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RS";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rs_wrapper.cpp"
  
