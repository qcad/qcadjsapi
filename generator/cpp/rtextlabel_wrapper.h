
  // Auto generated
  
    #ifndef RTEXTLABEL_H_WRAPPER
    #define RTEXTLABEL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTextLabel.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTextLabel
    class RTextLabel_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     position READ getPosition WRITE setPosition
  )


    private:
      // disable copy constructor:
      RTextLabel_Wrapper(const RTextLabel_Wrapper&);

    public:
      // initialization of RTextLabel:
      static void init(RJSApi& handler);

      
        static RTextLabel* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RTextLabel:
          for (int i=0; i<basecasters_RTextLabel.length(); i++) {
            RJSBasecaster_RTextLabel* basecaster = basecasters_RTextLabel[i];
            RTextLabel* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RTextLabel:
          if (t==RJSType_RTextLabel::getIdStatic()) {
            return (RTextLabel*)vp;
          }

          qWarning() << "RTextLabel_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RTextLabel* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTextLabel*: wrapper wraps NULL";
          }

          RTextLabel* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTextLabel*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTextLabel_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTextLabel_Wrapper(RJSApi& h, RTextLabel* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RTextLabel_Wrapper(RJSApi& h, QSharedPointer<RTextLabel> o);
          

      // destructor:
      
          virtual ~RTextLabel_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTextLabel
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTextLabel_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
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
            

    // non-static functions:
    
    // Class: RTextLabel
    // Function: getShapeType
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getShapeType
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: setZ
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setZ
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextLabel
    // Function: getVectorProperties
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getPosition
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: setPosition
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextLabel
    // Function: getBoundingBox
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getLength
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getEndPoints
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getMiddlePoints
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getCenterPoints
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getPointsWithDistanceToEnd
    // Source: RPoint
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointsWithDistanceToEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getPointCloud
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointCloud
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getAngleAt
    // Source: RPoint
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngleAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getVectorTo
    // Source: RPoint
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorTo
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
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: move
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextLabel
    // Function: rotate
    // Source: RPoint
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotate
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
            
    // Class: RTextLabel
    // Function: scale
    // Source: RPoint
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
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
            
    // Class: RTextLabel
    // Function: mirror
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirror
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RTextLabel
    // Function: flipHorizontal
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipHorizontal
              (

                
              )
              
              ;
            
    // Class: RTextLabel
    // Function: flipVertical
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipVertical
              (

                
              )
              
              ;
            
    // Class: RTextLabel
    // Function: getTransformed
    // Source: RPoint
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransformed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: copy
    // Source: RPoint
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copy
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getText
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLabel
    // Function: getUserData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getUserData
              (

                
              )
              
                const
              
              ;
            
          /*
          // get wrapped object as clone:
          // used to create a QSharedPointer on the fly when needed for conversion:
          public:
           RTextLabel* getWrappedClone() {
            RTextLabel* w = getWrapped();
            if (w==nullptr) {
              qWarning() << "RTextLabel::getWrappedClone: wrapped is NULL";
              handler.trace();
              return nullptr;
            }
            // return cloned object:
            return new RTextLabel(*w);
          }
          */
        

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
          return RJSType_RTextLabel::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RTextLabel* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTextLabel* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer<RTextLabel> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RTextLabel> but a regular pointer";
            return QSharedPointer<RTextLabel>();
          }
          return QSharedPointer<RTextLabel>();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() && spWrapped.data()!=nullptr;
        }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
            || (!spWrapped.isNull() && spWrapped.data()!=nullptr)
          
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
          
            if (!spWrapped.isNull() && spWrapped.data()!=nullptr) {
              return (unsigned long long int)spWrapped.data();
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RTextLabel* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RTextLabel> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTextLabel*> basecasters_RTextLabel;

      public:
        static void registerBasecaster_RTextLabel(RJSBasecaster_RTextLabel* bc) {
          basecasters_RTextLabel.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTextLabel_Wrapper*)

    Q_DECLARE_INTERFACE(RTextLabel_Wrapper, "org.qcad.RTextLabel_Wrapper")

  
  #endif
  
