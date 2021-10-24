export enum AppRoles {
  /**
   * @UserModule
   */
  ADMIN_CREATE_ANY_USER = 'ADMIN_CREATE_ANY_USER',
  ADMIN_READ_ANY_USER = 'ADMIN_READ_ANY_USER',
  ADMIN_UPDATE_ANY_USER = 'ADMIN_UPDATE_ANY_USER',
  ADMIN_DELETE_ANY_USER = 'ADMIN_DELETE_ANY_USER',

  /**
   * @CategoryModule
   */
  ADMIN_CREATE_ANY_CATEGORY = 'ADMIN_CREATE_ANY_CATEGORY',
  ADMIN_READ_ANY_CATEGORY = 'ADMIN_READ_ANY_CATEGORY',
  ADMIN_UPDATE_ANY_CATEGORY = 'ADMIN_UPDATE_ANY_CATEGORY',
  ADMIN_DELETE_ANY_CATEGORY = 'ADMIN_DELETE_ANY_CATEGORY',
  ADMIN_RESTORE_ANY_CATEGORY = 'ADMIN_RESTORE_ANY_CATEGORY',


  /**
   * @PermissionModule
   */
  ADMIN_CREATE_ANY_PERMISSION = 'ADMIN_CREATE_ANY_PERMISSION',
  ADMIN_READ_ANY_PERMISSION = 'ADMIN_READ_ANY_PERMISSION',
  ADMIN_UPDATE_ANY_PERMISSION = 'ADMIN_UPDATE_ANY_PERMISSION',
  ADMIN_DELETE_ANY_PERMISSION = 'ADMIN_DELETE_ANY_PERMISSION',
  ADMIN_READ_ANY_ROLE = 'ADMIN_READ_ANY_ROLE',

  /**
   * @AuthModule
   */
  ADMIN_READ_OWN_PROFILE = 'ADMIN_READ_OWN_PROFILE',
  ADMIN_UPDATE_OWN_PROFILE = 'ADMIN_UPDATE_OWN_PROFILE',
  USER_UPDATE_OWN_PROFILE = 'USER_UPDATE_OWN_PROFILE',
  USER_READ_OWN_PROFILE = 'USER_READ_OWN_PROFILE',


  /**
   * @JobModule
   */
  ADMIN_READ_ANY_JOB = 'ADMIN_READ_ANY_JOB',
  USER_READ_ANY_JOB = 'USER_READ_ANY_JOB',
  CONTRIBUTOR_CREATE_ANY_JOB = 'CONTRIBUTOR_CREATE_ANY_JOB',
  CONTRIBUTOR_READ_OWN_JOB = 'CONTRIBUTOR_READ_OWN_JOB',
  ADMIN_DELETE_ANY_JOB = 'ADMIN_DELETE_ANY_JOB',
  ADMIN_UPDATE_ANY_JOB = 'ADMIN_UPDATE_ANY_JOB',
  CONTRIBUTOR_UPDATE_OWN_JOB = 'CONTRIBUTOR_UPDATE_OWN_JOB'
}