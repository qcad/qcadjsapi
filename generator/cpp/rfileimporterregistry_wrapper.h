
  // Auto generated
  
    #ifndef RFILEIMPORTERREGISTRY_H_WRAPPER
    #define RFILEIMPORTERREGISTRY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RFileImporter.h"
      
        #include "RFileImporterFactory.h"
      
        #include "RMessageHandler.h"
      
        #include "RProgressHandler.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RFileImporterRegistry.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RFileImporterRegistry_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RFileImporterRegistry_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RFileImporterRegistry
    // Function: registerFileImporter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerFileImporter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: unregisterFileImporter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unregisterFileImporter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: getFileImporter
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFileImporter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: getFilterStrings
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFilterStrings
              (

                
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: hasFileImporter
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFileImporter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: getFilterExtensions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFilterExtensions
              (

                
              )
              
              ;
            
    // Class: RFileImporterRegistry
    // Function: getFilterExtensionPatterns
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFilterExtensionPatterns
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RFileImporterRegistry_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RFileImporterRegistry
    class QCADJSAPI_EXPORT 
     RFileImporterRegistry_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RFileImporterRegistry_Wrapper(const RFileImporterRegistry_Wrapper&);

    public:
      // initialization of RFileImporterRegistry:
      static void init(RJSApi& handler);

      
        static RFileImporterRegistry* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RFileImporterRegistry:
          for (int i=0; i<basecasters_RFileImporterRegistry.length(); i++) {
            RJSBasecaster_RFileImporterRegistry* basecaster = basecasters_RFileImporterRegistry[i];
            RFileImporterRegistry* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RFileImporterRegistry:
          if (t==RJSType_RFileImporterRegistry::getIdStatic()) {
            return (RFileImporterRegistry*)vp;
          }

          qWarning() << "RFileImporterRegistry_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RFileImporterRegistry* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RFileImporterRegistry*: wrapper wraps NULL";
          }

          RFileImporterRegistry* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RFileImporterRegistry*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RFileImporterRegistry_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RFileImporterRegistry_Wrapper(RJSApi& h, RFileImporterRegistry* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RFileImporterRegistry_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RFileImporterRegistry
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RFileImporterRegistry_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
              if (wrapped!=nullptr) {
                
                    delete wrapped;
                  
                wrapped = nullptr;
              }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RFileImporterRegistry::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RFileImporterRegistry* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RFileImporterRegistry* getWrapped() const {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          
            return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          
            if (wrapped!=nullptr) {
              return (unsigned long long int)wrapped;
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:

        
          // wrapped object:
          RFileImporterRegistry* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RFileImporterRegistry*> basecasters_RFileImporterRegistry;

      public:
        static void registerBasecaster_RFileImporterRegistry(RJSBasecaster_RFileImporterRegistry* bc) {
          basecasters_RFileImporterRegistry.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RFileImporterRegistry_Wrapper*)

    Q_DECLARE_INTERFACE(RFileImporterRegistry_Wrapper, "org.qcad.RFileImporterRegistry_Wrapper")

  
  #endif
  
