# cogi-storage

This is a library that provides storage (specifically, file-based storage) for the cogisphere application.
Initially, we tried using IndexedDB and redux as storage base, but both proofedt to be wildely unsuitable.
Redux is just not a storage mechanism and it's hard to use it as such. It also has no reasonable persistance
and not much to offer. IndexedBD is cool and works ok as long as the browser is open, but storing bigger
chunks of data (like an image) makes the browser wipe the data on every reload. Thus migration to electron
and file-based storage.