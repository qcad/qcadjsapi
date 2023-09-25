#include <QtCore/QtGlobal>

#if defined(QCAD_DLL)
#   if defined(QCADJSAPI_LIBRARY)
#       define QCADJSAPI_EXPORT Q_DECL_EXPORT
#   else
#       define QCADJSAPI_EXPORT Q_DECL_IMPORT
#   endif
#else
#   define QCADJSAPI_EXPORT
#endif
